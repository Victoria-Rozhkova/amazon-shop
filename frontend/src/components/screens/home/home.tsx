import Cookies from 'js-cookie'
import { FC } from 'react'

import { TokensEnum } from '@/store/user/user.interface'
import { PaginationProduct } from '@/types/product.interface'
import { CatalogPagination } from '@/ui/catalog'
import { Heading, Layout } from '@/ui/index'
import Meta from '@/ui/meta'

const Home: FC<PaginationProduct> = ({ products, length }) => {
	return (
		<Meta title='Home'>
			<Layout>
				<button
					onClick={() => console.log(Cookies.get(TokensEnum.refreshToken))}
				>
					Get refresh
				</button>
				<Heading>Home</Heading>
				<CatalogPagination
					title='Freshed products'
					data={{ products, length }}
				/>
			</Layout>
		</Meta>
	)
}

export default Home
