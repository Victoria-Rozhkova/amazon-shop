import { IProduct } from '@/types/product.interface'

export type ProductItemProps = {
	product: IProduct
}

export type FavoriteButtonProps = {
	productId: number | string
}

export type AddToCartButtonProps = {
	product: IProduct
}

export type RatingProps = {
	product: IProduct
}
