import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";
import { setContext } from "@apollo/client/link/context";
import { RetryLink } from "@apollo/client/link/retry";

import { onError } from "@apollo/client/link/error";

loadDevMessages();
loadErrorMessages();

const httpLink = new HttpLink({
  uri:
    //process.env.NEXT_PUBLIC_URL_SERVER_GRAPHQL ||
    "http://localhost:4000/graphql",
});

const retryLink = new RetryLink({
  attempts: {
    max: 5,
    retryIf: (error) => {
      console.error("RetryLink error:", error);
      return error.message.includes("Network error");
    },
  },
});

const authLink = setContext(async (_, { headers }) => {
  const accessToken = localStorage.getItem("accessToken") ?? "";
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    },
  };
});

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ extensions, message, locations, path }) => {
      if (
        extensions?.code === "UNAUTHENTICATED" ||
        extensions?.code === "UNAUTHORIZED_TOKEN_EXPIRED" ||
        extensions?.code === "UNAUTHORIZED_TOKEN_INVALID"
      ) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        window.location.href = "/login";
      }
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
    });
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([retryLink, authLink, errorLink, httpLink]),
});

export default apolloClient;
