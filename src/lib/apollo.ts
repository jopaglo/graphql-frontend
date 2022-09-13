import {  ApolloClient , InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:4000', // url do backend para conexão e chamadas
  cache: new InMemoryCache(),
});

// eu vou envolver esse client na minha aplicacao, ele é o provider graphql