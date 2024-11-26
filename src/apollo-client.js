import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';


const username = 'admin'
const password = 'qweasd123'
const graphqlUri = import.meta.env.VITE_BASE_URL


const httpLink = new HttpLink({
    uri: graphqlUri,
    useGETForQueries: true,
    headers: {
      Authorization: `Basic ${btoa(`${username}:${password}`)}`
    },
  });
  
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

export default apolloClient;