import { ProductCardProps } from "../misc/types"

/*********************************************************************************** carrito */
export const SET_CART_COUNT = "SET_CART_COUNT"

export const TOGGLE_CART_MODAL = "TOGGLE_CART_MODAL"

export const ADD_TO_CART = "ADD_TO_CART"

export const ADD_OR_SUBSTRACT_UNITS = "ADD_OR_SUBSTRACT_UNITS"

type ProductsOnCart = {
	product: ProductCardProps
	units: number
}

export interface CartState {
	cart: {
		count: number
		open: boolean
		products: [] | ProductsOnCart[]
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

export interface AddToCartAction {
	type: typeof ADD_TO_CART
	payload: {
		product: ProductCardProps
		units: number
	}
}

export interface AddOrSubstractUnitAction {
	type: typeof ADD_OR_SUBSTRACT_UNITS
	payload: {
		action: "+1" | "-1"
		product: ProductCardProps
	}
}

export type CartAction =
	| CartCountItemsAction
	| CartOpenAction
	| AddToCartAction
	| AddOrSubstractUnitAction

/*********************************************************************************** Products */

export const SET_PRODUCT_TO_DISPLAY = "SET_PRODUCT_TO_DISPLAY"
export const CLEAR_PRODUCT = "CLEAR_PRODUCT"

export interface ProductState {
	product: ProductCardProps | null
}

export interface DisplayProductAction {
	type: typeof SET_PRODUCT_TO_DISPLAY
	payload: ProductCardProps
}

export interface ClearProductAction {
	type: typeof CLEAR_PRODUCT
	payload: null
}

export type ProductActions = DisplayProductAction | ClearProductAction
