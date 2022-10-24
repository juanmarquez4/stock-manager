import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_CATEGORY = gql`
  mutation addCategory($name: String!) {
    addCategory(name: $name) {
        name
    }
  }
`;

export const ADD_PRODUCT =  gql`
mutation AddProduct($name: String!, $quantity: Int!, $category: String!, $description: String) {
  addProduct(name: $name, quantity: $quantity, category: $category, description: $description) {
    name
    description
    quantity
    category {
      name
    }
  }
}
`;

export const REMOVE_PRODUCT =  gql`
mutation RemoveProduct($productId: ID!) {
  removeProduct(productId: $productId) {
    name
  }
}
`;

