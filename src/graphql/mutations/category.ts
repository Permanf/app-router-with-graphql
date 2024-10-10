import { gql } from "@apollo/client";

export const CREATE_CATEGORY = gql`
  mutation AddCategory($name: String!, $image: String!) {
    addCategory(
      data: { name: $name, image: $image }
    ) {
      id
      name
      image
    }
  }
`;