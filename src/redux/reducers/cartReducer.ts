import { SET_CART_COUNT, CartAction, CartState, TOGGLE_CART_MODAL } from "../types"

let initialState: CartState = {
	cart: {
		count: 0,
		open: false,
	},
}

const cartReducer = (state = initialState, action: CartAction) => {
	switch (action.type) {
		case SET_CART_COUNT:
			return {
				...state,
				cart: {
					...state.cart,
					count: action.payload,
				},
			}

		case TOGGLE_CART_MODAL:
			return {
				...state,
				cart: {
					...state.cart,
					open: action.payload,
				},
			}

		default:
			return {
				...state,
			}
	}
}

export default cartReducer
