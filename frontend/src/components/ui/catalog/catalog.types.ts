import { IProduct } from '@/types/product.interface'

export type CatalogProps = {
	products: IProduct[]
	isLoading?: boolean
	title?: string
}
