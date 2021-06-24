import { ProductCardProps } from "../../misc/types"
import {
	CartAction,
	SET_CART_COUNT,
	TOGGLE_CART_MODAL,
	ADD_TO_CART,
	ADD_OR_SUBSTRACT_UNITS,
} from "../types"

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

export const addToCart = (product: ProductCardProps, units: number) => {
	return {
		type: ADD_TO_CART,
		payload: {
			product,
			units,
		},
	}
}

export const addOrRemoveUnits = (product: ProductCardProps, action: "+1" | "-1") => {
	return {
		type: ADD_OR_SUBSTRACT_UNITS,
		payload: {
			product,
			action,
		},
	}
}
