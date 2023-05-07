import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import AddToCartButton from './add-to-cart-button'
import FavoriteButton from './favorite-button'
import ProductRating from './product-rating'
import { ProductItemProps } from './types'
import { convertPrice } from '@/utils/convert-price'

const DynamicFavoriteButton = dynamic(() => import('./favorite-button'), {
	ssr: false
})

const ProductItem: FC<ProductItemProps> = ({ product }) => {
	return (
		<div>
			<div className='bg-white rounded-xl relative overflow-hidden'>
				<div className='absolute top-2 right-2 z-10'>
					<DynamicFavoriteButton productId={product.id} />
					<AddToCartButton product={product} />
				</div>
				<Link href={`/product/${product.slug}`}>
					<Image
						width={250}
						height={250}
						src={product.images[0]}
						alt={product.name}
					/>
				</Link>
			</div>
			<Link href={`/product/${product.slug}`}>
				<h3 className='mb-1'>{product.name}</h3>
			</Link>
			<Link
				href={`/category/${product.category.slug}`}
				className='text-aqua text-sm mb-2'
			>
				{product.category.name}
			</Link>
			<ProductRating product={product} />
			<div className='text-xl font-semibold'>{convertPrice(product.price)}</div>
		</div>
	)
}

export default ProductItem
