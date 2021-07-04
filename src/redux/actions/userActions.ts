import {
	LoadUsersBillingInfoAction,
	LoadUsersShippingAction,
	LOAD_USERS_BILLING_INFO,
	LOAD_USERS_SHIPPING_INFO,
} from "../types"
import { Address, ShippingOption } from "../../misc/types"

interface BillingInfo {
	name: string
	email: string
	phoneNumber: string
	dniOrCuil: string
	billingAddress: Address
}

interface ShippingInfo {
	send: boolean
	shippingAddress: Address | null
	shippingOption: ShippingOption | null
}

export const loadUsersBillingInfo = (billingInfo: BillingInfo): LoadUsersBillingInfoAction => {
	return {
		type: LOAD_USERS_BILLING_INFO,
		payload: billingInfo,
	}
}

export const loadUsersShippingInfo = (shippingInfo: ShippingInfo): LoadUsersShippingAction => {
	return {
		type: LOAD_USERS_SHIPPING_INFO,
		payload: shippingInfo,
	}
}
