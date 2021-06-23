import { CLEAR_PRODUCT, ProductActions, ProductState, SET_PRODUCT_TO_DISPLAY } from "../types"

const initialState: ProductState = {
	product: null,
}

const productReducer = (state = initialState, action: ProductActions): ProductState => {
	switch (action.type) {
		case SET_PRODUCT_TO_DISPLAY:
			return {
				...state,
				product: action.payload,
			}

		case CLEAR_PRODUCT:
			return {
				...state,
				product: action.payload,
			}

		default:
			return state
	}
}

export default productReducer
