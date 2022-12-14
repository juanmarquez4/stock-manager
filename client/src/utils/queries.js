import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  query allCategories {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_PRODUCTS = gql`
query Products {
  products {
    _id
    name
    description
    quantity
    category {
      name
    }
  }
}
`

