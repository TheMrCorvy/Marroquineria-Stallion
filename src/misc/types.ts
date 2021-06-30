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

type Address = {
	streetOne: string
	streetTwo?: string
	number: number
	postalCode: number
	state: string
	city: string
	town?: string
}

type Price = {
	region: string
	delay: string
	price: string | number
}

export interface ShippingOption {
	method: string
	prices: Price[]
}

export interface User {
	name: string
	email: string
	phoneNumber?: string
	dniOrCuil: string
	billingAddress: Address
	shippingAddress: Address
	shipping: {
		send: boolean
		shippingOption: ShippingOption
	}
}
