import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
mutation {
	addProduct(
		data: {
			title: "New Product"
			price: 10
			description: "A description"
			categoryId: 1
			images: ["https://www.pexels.com/ru-ru/photo/27872065"]
		}
	) {
		title
		price
		images
		category {
			id
			name
			image
		}
	}
}
`;