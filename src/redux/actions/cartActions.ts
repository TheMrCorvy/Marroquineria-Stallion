import { ProductCardProps } from "../../misc/types"
import {
	CartCountItemsAction,
	CartOpenAction,
	AddToCartAction,
	AddOrSubstractUnitAction,
	RemoveFromCartAction,
	SET_CART_COUNT,
	TOGGLE_CART_MODAL,
	ADD_TO_CART,
	ADD_OR_SUBSTRACT_UNITS,
	REMOVE_ITEM_FROM_CART,
} from "../types"

export const setCartCount = (count: number): CartCountItemsAction => {
	return {
		type: SET_CART_COUNT,
		payload: count,
	}
}

export const toggleCartModal = (open: boolean): CartOpenAction => {
	return {
		type: TOGGLE_CART_MODAL,
		payload: open,
	}
}

export const addToCart = (product: ProductCardProps, units: number): AddToCartAction => {
	return {
		type: ADD_TO_CART,
		payload: {
			product,
			units,
		},
	}
}

export const addOrRemoveUnits = (
	product: ProductCardProps,
	action: "+1" | "-1"
): AddOrSubstractUnitAction => {
	return {
		type: ADD_OR_SUBSTRACT_UNITS,
		payload: {
			product,
			action,
		},
	}
}

export const removeItemFromCart = (productId: number): RemoveFromCartAction => {
	return {
		type: REMOVE_ITEM_FROM_CART,
		payload: productId,
	}
}
