const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Category {
    _id: ID
    name: String
  }

type Product {
    _id: ID
    name: String
    description: String
    quantity: Int
    category: Category
}

type Profile {
    _id: ID
    name: String
    email: String
    password: String
}

type Auth {
    token: ID!
    profile: Profile
}

type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    profiles: [Profile]!
    profile(profileId: ID!): Profile
}

type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeProfile(profileId: ID!): Profile
    addProduct(name: String!, description: String, quantity: Int!, category: String!): Product
    updateProduct(_id: ID!, quantity: Int!): Product
    addCategory(name: String!): Category
}
`;

module.exports = typeDefs;

// check if need to add Category to update product