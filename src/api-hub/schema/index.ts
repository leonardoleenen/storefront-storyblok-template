import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    hello: String
  }

  type User {
    username: String
  }
`;

export { typeDefs };
