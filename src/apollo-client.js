import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';


const username = 'admin'
const password = 'qweasd123'

const httpLink = new HttpLink({
    uri: 'https://api-urancompany.devserver.app/jsonapi',
    headers: {
      Authorization: `Basic ${btoa(`${username}:${password}`)}`
    },
  });
  
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

export default apolloClient;