import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/graphql',
  cache: new InMemoryCache(),
}); 