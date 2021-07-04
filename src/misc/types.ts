type Images = {
	img_url: string
}

export interface ProductCardProps {
	id: number
	title: string
	description: string
	price: string | number
	stock: number
	images: Images[]
	brand: string
}

/*********************************************************************************** User */

export type Address = {
	streetOne: string
	streetTwo: string
	number: number
	postalCode: number
	state: string
	city: string
	town: string
}

export type Price = {
	region: string
	delay: string
	price: string | number
}

export interface ShippingOption {
	method: string
	price: Price
}

export interface User {
	name: string
	email: string
	phoneNumber: string
	dniOrCuil: string
	billingAddress: Address
	shipping: {
		send: boolean
		shippingAddress: Address | null
		shippingOption: ShippingOption | null
	}
}
