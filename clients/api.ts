import { GraphQLClient } from 'graphql-request';

const isClient = typeof window !== 'undefined';

export const GraphqlClient = new GraphQLClient("http://localhost:8000/graphql",{
  headers: () => ({
    Authorization: isClient ? `Bearer ${window.localStorage.getItem("__twitter_token")}`: '',
    //I think here if client is signed in, if not signed then how token will be get, before setted
  })
});

