import { gql } from 'graphql-tag';
import { graphql } from "../../gql"; 


export const verifyUserGoolgeTokenQuery = graphql(`
  query VerifyGoogleToken($token: String!) {
    verifyGoogleToken(token: $token) 
  }
`);