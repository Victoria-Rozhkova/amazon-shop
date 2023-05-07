import { ICategory } from './category.interface'
import { IReview } from './review.interface'

export interface IProduct {
	id: number
	name: string
	slug: string
	description: string
	price: number
	reviews: IReview[]
	images: string[]
	createdAt: string
	category: ICategory
}

export interface IProductDetails {
	product: IProduct
}

export type Products = {
	products: IProduct[]
}

export type PaginationProduct = {
	length: number
	products: IProduct[]
}
