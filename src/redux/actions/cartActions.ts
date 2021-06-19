import { CartAction, SET_CART_COUNT, TOGGLE_CART_MODAL } from "../types"

export const setCartCount = (count: number): CartAction => {
	return {
		type: SET_CART_COUNT,
		payload: count,
	}
}

export const toggleCartModal = (open: boolean): CartAction => {
	return {
		type: TOGGLE_CART_MODAL,
		payload: open,
	}
}
