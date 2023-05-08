import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'
import { ProductService } from '@/services/product/product.service'
import { Catalog } from '@/ui/catalog'
import { Layout } from '@/ui/index'
import Meta from '@/ui/meta'

const SearchPage: NextPageAuth = () => {
	const { query } = useRouter()
	const { data } = useQuery(['search products', query.term], () =>
		ProductService.getAll({
			searchTerm: query.term as string
		})
	)
	return (
		<Meta title='Search'>
			<Layout>
				<Catalog
					products={data?.products || []}
					title={`Поиск по запросу "${query.term || ''}"`}
				/>
			</Layout>
		</Meta>
	)
}

export default SearchPage
