import { GetStaticProps, NextPage } from 'next'

import Home from '@/screens/home/home'
import { ProductService } from '@/services/product/product.service'
import { PaginationProduct } from '@/types/product.interface'

const HomePage: NextPage<PaginationProduct> = ({ length, products }) => {
	return <Home products={products} length={length} />
}

export const getStaticProps: GetStaticProps<PaginationProduct> = async () => {
	const { data } = await ProductService.getAll({
		page: 1,
		perPage: 4
	})

	return {
		props: data
	}
}

export default HomePage
