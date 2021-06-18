import { CartAction, SET_CART_COUNT } from "../types"

export const setCartCount = (count: number): CartAction => {
	return {
		type: SET_CART_COUNT,
		payload: count,
	}
}
