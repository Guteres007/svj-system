import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import ApolloClient from "@frontend/libs/apollo";
import { RouterProvider } from "react-router-dom";
import { router } from "@frontend/routes";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// Případné rozšíření barevného schématu
const theme = extendTheme({
  // styles: {
  //   global: {
  //     'html, body': {
  //       color: 'gray.600',
  //       lineHeight: 'tall',
  //     },
  //     a: {
  //       color: 'teal.500',
  //     },
  //   },
  // },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={ApolloClient}>
      <ChakraProvider theme={theme} cssVarsRoot="body">
        <RouterProvider router={router} />
      </ChakraProvider>
    </ApolloProvider>
  </StrictMode>,
);
