import { ProductCardProps } from "../../misc/types"
import { ProductActions, SET_PRODUCT_TO_DISPLAY, CLEAR_PRODUCT } from "../types"

export const displayProduct = (product: ProductCardProps): ProductActions => {
	return {
		type: SET_PRODUCT_TO_DISPLAY,
		payload: product,
	}
}

export const clearProduct = (): ProductActions => {
	return {
		type: CLEAR_PRODUCT,
		payload: null,
	}
}
