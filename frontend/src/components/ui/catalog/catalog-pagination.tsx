import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'

import Button from '../button/button'

import { CatalogPaginationProps } from './catalog.types'
import ProductItem from './product-item/product-item'
import SortDropdown from './sort-dropdown/sort-dropdown'
import Heading from '@/components/ui/heading/heading'
import { Loader } from '@/components/ui/loader'
import { ProductService } from '@/services/product/product.service'
import { ProductSortEnum } from '@/services/types/types'

const CatalogPagination: FC<CatalogPaginationProps> = ({ data, title }) => {
	const [page, setPage] = useState<number>(1)
	const [currentSort, setCurrentSort] = useState<ProductSortEnum>(
		ProductSortEnum.NEWEST
	)

	const { data: response, isLoading } = useQuery(
		['products', currentSort, page],
		() =>
			ProductService.getAll({
				page,
				perPage: 4,
				sort: currentSort
			}),
		{ initialData: data }
	)

	if (isLoading) return <Loader />
	return (
		<section>
			{title && <Heading className='mb-5'>{title}</Heading>}
			<SortDropdown currentSort={currentSort} setCurrentSort={setCurrentSort} />
			{response.products.length ? (
				<>
					<div className='grid grid-cols-4 gap-10'>
						{response.products.map(product => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
					<div className='text-center mt-16'>
						{Array.from({ length: response.length / 4 }).map((_, index) => {
							const pageNumber = index + 1
							return (
								<Button
									key={pageNumber}
									variant={page === pageNumber ? 'orange' : 'white'}
									size='small'
									onClick={() => setPage(pageNumber)}
									className='mx-3'
								>
									{pageNumber}
								</Button>
							)
						})}
					</div>
				</>
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}

export default CatalogPagination
