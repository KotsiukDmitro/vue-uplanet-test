import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';
import { RestLink } from 'apollo-link-rest';


const username = import.meta.env.VITE_API_USER_NAME
const password = import.meta.env.VITE_API_USER_PASSWORD
const graphqlUri = import.meta.env.VITE_BASE_URL


// const httpLink = new HttpLink({
//     uri: graphqlUri,
//     useGETForQueries: true,
//     headers: {
//       Authorization: `Basic ${btoa(`${username}:${password}`)}`,
//       'Content-Type': 'application/json',
//     },
//   });

  const restLink = new RestLink({
    uri: graphqlUri,
    useGETForQueries: true,
    headers: {
      Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      'Content-Type': 'application/vnd.api+json',
      Accept: 'application/vnd.api+json',
    },
    customFetch: (uri, options) => {
      const decodedUri = uri.replace(/%2F/g, '/');
      // const decodedUri = uri.replace(/%7B/g, '{').replace(/%7D/g, '}');
      return fetch(decodedUri, options);
    },
  });
  
  const apolloClient = new ApolloClient({
    // link: httpLink,
    link: restLink,
    cache: new InMemoryCache(),
  });

export default apolloClient;