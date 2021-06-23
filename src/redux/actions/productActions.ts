import { ProductCardProps } from "../../misc/types"
import { ProductActions, SET_PRODUCT_TO_DISPLAY } from "../types"

export const displayProduct = (product: ProductCardProps): ProductActions => {
	return {
		type: SET_PRODUCT_TO_DISPLAY,
		payload: product,
	}
}
