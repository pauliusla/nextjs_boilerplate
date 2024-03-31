import { gql } from "@apollo/client";

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    age: Int!
    active: Boolean
  }

  input NewUserInput {
    firstName: String!
    lastName: String!
    email: String!
    age: Int!
  }

  type Query {
    user(id: String): User
    users: [User]
  }

  type Mutation {
    createUser(input: NewUserInput!): User
  }
`;

export default typeDefs;
