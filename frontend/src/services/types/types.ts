export enum UrlEnum {
	categories = '/categories',
	reviews = '/reviews',
	users = '/users',
	orders = '/orders',
	statistics = '/statistics',
	payment = '/payment',
	products = '/products'
}

export enum ProductSortEnum {
	HIGH_PRICE = 'high-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}

export type ReviewRequest = {
	rating: number
	text: string
}

export type ProfileRequest = {
	email: string
	password?: string
	name?: string
	avatarPath?: string
	phone?: string
}

export type ProductRequest = {
	name: string
	price: number
	description?: string
	images: string[]
	categoryId: number
}

export type DataFilters = {
	sort?: ProductSortEnum
	searchTerm?: string
}
