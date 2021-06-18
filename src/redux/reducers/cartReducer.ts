import { SET_CART_COUNT, CartAction, CartState } from "../types"

let initialState: CartState = {
	cart: {
		count: 0,
	},
}

const cartReducer = (state = initialState, action: CartAction) => {
	switch (action.type) {
		case SET_CART_COUNT:
			return {
				...state,
				cart: {
					count: action.payload,
				},
			}

		default:
			return {
				...state,
			}
	}
}

export default cartReducer
