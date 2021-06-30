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
