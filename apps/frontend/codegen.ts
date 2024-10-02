import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  documents: ["src/graphql/**/*.graphql"],

  generates: {
    "./src/graphql/index.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        withComponent: false,
        withHOC: false,
      },
    },
    "./src/graphql/graphql.introspection.json": {
      plugins: ["introspection"],
    },
    "./src/graphql/graphql.possibleTypes.json": {
      plugins: ["fragment-matcher"],
    },
  },
};

export default config;
