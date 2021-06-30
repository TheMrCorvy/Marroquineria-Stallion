import {
	SET_CART_COUNT,
	CartAction,
	AddToCartAction,
	CartState,
	AddOrSubstractUnitAction,
	TOGGLE_CART_MODAL,
	ADD_TO_CART,
	ADD_OR_SUBSTRACT_UNITS,
	REMOVE_ITEM_FROM_CART,
	RemoveFromCartAction,
	INITIALIZE_CART,
} from "../types"

let initialState: CartState = {
	cart: {
		count: 0,
		open: false,
		products: [],
	},
}

const cartReducer = (state = initialState, action: CartAction): CartState => {
	switch (action.type) {
		case INITIALIZE_CART:
			return action.payload

		case SET_CART_COUNT:
			return storeState({
				...state,
				cart: {
					...state.cart,
					count: action.payload,
				},
			})

		case TOGGLE_CART_MODAL:
			return storeState({
				...state,
				cart: {
					...state.cart,
					open: action.payload,
				},
			})

		case ADD_TO_CART:
			return addToCart(state, action)

		case ADD_OR_SUBSTRACT_UNITS:
			return modifyUnits(state, action)

		case REMOVE_ITEM_FROM_CART:
			return removeFromCart(state, action)

		default:
			return state
	}
}

export default cartReducer

const addToCart = (state: CartState, action: AddToCartAction) => {
	const oldCount = state.cart.count

	const newCount = action.payload.units + oldCount

	const productsArr = [...state.cart.products]

	const isInArr = productsArr.some((product) => product.product.id === action.payload.product.id)

	if (!isInArr) {
		productsArr.push({
			product: action.payload.product,
			units: action.payload.units,
		})
	}

	return storeState({
		...state,
		cart: {
			...state.cart,
			count: !isInArr ? newCount : state.cart.count,
			products: productsArr,
		},
	})
}

const modifyUnits = (state: CartState, action: AddOrSubstractUnitAction) => {
	const index = state.cart.products.findIndex(
		(product) => product.product.id === action.payload.product.id
	)

	let newArr = [...state.cart.products]

	if (action.payload.action === "+1") {
		const newUnits = newArr[index].units + 1

		const stillInStock = newUnits <= newArr[index].product.stock

		if (stillInStock) {
			newArr[index].units = newUnits
		}

		return storeState({
			...state,
			cart: {
				...state.cart,
				count: stillInStock ? state.cart.count + 1 : state.cart.count,
				products: newArr,
			},
		})
	} else {
		const newUnits = newArr[index].units - 1

		if (newUnits >= 1) {
			newArr[index].units = newUnits
		}

		return storeState({
			...state,
			cart: {
				...state.cart,
				count: newUnits >= 1 ? state.cart.count - 1 : state.cart.count,
				products: newArr,
			},
		})
	}
}

const removeFromCart = (state: CartState, action: RemoveFromCartAction) => {
	const index = state.cart.products.findIndex((product) => product.product.id === action.payload)

	return storeState({
		...state,
		cart: {
			...state.cart,
			products: state.cart.products.filter(
				(product) => product.product.id !== action.payload
			),
			count: state.cart.count - state.cart.products[index].units,
		},
	})
}

const storeState = (cart: CartState): CartState => {
	try {
		localStorage.setItem("shopping-cart", JSON.stringify(cart))

		return cart
	} catch (error) {
		console.log(error)

		return cart
	}
}
