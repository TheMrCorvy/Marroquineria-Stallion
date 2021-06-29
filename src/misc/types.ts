type Images = {
	imgUrl: string
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
