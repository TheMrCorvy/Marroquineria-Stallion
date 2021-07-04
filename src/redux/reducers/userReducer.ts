import { LOAD_USERS_BILLING_INFO, LOAD_USERS_SHIPPING_INFO, UserAction, UserState } from "../types"

const initialState: UserState = {
	name: "",
	email: "",
	phoneNumber: "",
	dniOrCuil: "",
	billingAddress: {
		streetOne: "",
		streetTwo: "",
		number: 0,
		postalCode: 0,
		state: "",
		city: "",
		town: "",
	},
	shipping: {
		send: false,
		shippingAddress: null,
		shippingOption: null,
	},
}

const userReducer = (state = initialState, action: UserAction): UserState => {
	switch (action.type) {
		case LOAD_USERS_BILLING_INFO:
			return {
				...state,
				name: action.payload.name,
				email: action.payload.email,
				phoneNumber: action.payload.phoneNumber,
				dniOrCuil: action.payload.dniOrCuil,
				billingAddress: action.payload.billingAddress,
			}

		case LOAD_USERS_SHIPPING_INFO:
			return {
				...state,
				shipping: {
					send: action.payload.send,
					shippingAddress: action.payload.shippingAddress,
					shippingOption: action.payload.shippingOption,
				},
			}

		default:
			return state
	}
}

export default userReducer
