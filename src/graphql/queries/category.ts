import { gql } from "@apollo/client";

export const GET_ALL_CATEGORY = gql`
query GetAllCategories {
  categories{
		id
		name
		image
  }
}
`;