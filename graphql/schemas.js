import { gql } from "apollo-server";

export const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Note {
    _id: ID!
    title: String!
    content: String
  }

  type Query {
    notes: [Note]
  }

  type Mutation {
    addNote(title: String!, content: String!): Note!
    updateNote(_id: ID!, title: String!, content: String!): Note!
    deleteNote(_id: ID!): Note!
  }
`;
