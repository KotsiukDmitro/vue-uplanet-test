import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';


const username = import.meta.env.VITE_API_USER_NAME
const password = import.meta.env.VITE_API_USER_PASSWORD
const graphqlUri = import.meta.env.VITE_BASE_URL


const httpLink = new HttpLink({
    uri: graphqlUri,
    useGETForQueries: true,
    headers: {
      Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      'Content-Type': 'application/json',
    },
  });
  
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

export default apolloClient;