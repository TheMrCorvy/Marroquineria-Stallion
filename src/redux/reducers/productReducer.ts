import { ProductActions, ProductState, SET_PRODUCT_TO_DISPLAY } from "../types"

const initialState = {
	product: {
		id: 0,
		imgUrl: "",
		title: "",
		description: "",
		price: "",
	},
}

const productReducer = (state = initialState, action: ProductActions): ProductState => {
	switch (action.type) {
		case SET_PRODUCT_TO_DISPLAY:
			return {
				...state,
				product: action.payload,
			}

		default:
			return { ...state }
	}
}

export default productReducer
