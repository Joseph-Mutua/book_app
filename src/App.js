import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

// Handle Errors
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql",
  }),
]);

const client = new ApolloClient({
  uri: link,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider>
      
    </ApolloProvider>
  );
}

export default App;
