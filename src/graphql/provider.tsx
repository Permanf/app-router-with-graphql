"use client";

import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./apollo-client";

const client = createApolloClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}