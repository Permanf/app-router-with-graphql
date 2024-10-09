import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
{
  products{
	id
    title
    price
    description
    images
    category {
        id
        name
        image
    }
  }
}
`;