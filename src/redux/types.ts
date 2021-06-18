export const SET_CART_COUNT = "SET_CART_COUNT"

export interface CartState {
	cart: {
		count: number
	}
}

export interface CartCountItemsAction {
	type: typeof SET_CART_COUNT
	payload: number
}

export type CartAction = CartCountItemsAction
