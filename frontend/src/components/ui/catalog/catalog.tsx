import { FC } from 'react'

import { CatalogProps } from './catalog.types'
import ProductItem from './product-item/product-item'
import Heading from '@/components/ui/heading/heading'
import { Loader } from '@/components/ui/loader'

const Catalog: FC<CatalogProps> = ({ products, isLoading, title }) => {
	if (isLoading) return <Loader />
	return (
		<section>
			{title && <Heading>{title}</Heading>}
			{products.length ? (
				<div className='grid grid-cols-4 gap-10'>
					{products.map(product => (
						<ProductItem key={product.id} product={product} />
					))}
				</div>
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}

export default Catalog
