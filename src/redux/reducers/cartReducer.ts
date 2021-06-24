import { SET_CART_COUNT, CartAction, CartState, TOGGLE_CART_MODAL, ADD_TO_CART } from "../types"

let initialState: CartState = {
	cart: {
		count: 0,
		open: false,
		products: [],
	},
}

const cartReducer = (state = initialState, action: CartAction): CartState => {
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

		case ADD_TO_CART:
			const oldCount = state.cart.count

			const newCount = action.payload.units + oldCount

			const productsArr = [...state.cart.products]

			const isInArr = productsArr.some(
				(product) => product.product.id === action.payload.product.id
			)

			if (!isInArr) {
				productsArr.push({
					product: action.payload.product,
					units: action.payload.units,
				})
			}

			return {
				...state,
				cart: {
					...state.cart,
					count: !isInArr ? newCount : state.cart.count,
					products: productsArr,
				},
			}

		default:
			return state
	}
}

export default cartReducer
