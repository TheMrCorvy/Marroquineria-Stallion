export const SET_CART_COUNT = "SET_CART_COUNT"

export const TOGGLE_CART_MODAL = "TOGGLE_CART_MODAL"

export interface CartState {
	cart: {
		count: number
		open: boolean
	}
}

export interface CartCountItemsAction {
	type: typeof SET_CART_COUNT
	payload: number
}

export interface CartOpenAction {
	type: typeof TOGGLE_CART_MODAL
	payload: boolean
}

export type CartAction = CartCountItemsAction | CartOpenAction
