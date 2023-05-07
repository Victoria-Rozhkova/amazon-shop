import { IProduct, PaginationProduct } from '@/types/product.interface'

export type CatalogProps = {
	products: IProduct[]
	isLoading?: boolean
	title?: string
}

export type CatalogPaginationProps = {
	data: PaginationProduct
	title?: string
}
