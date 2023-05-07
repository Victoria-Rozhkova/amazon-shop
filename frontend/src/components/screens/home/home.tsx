import Cookies from 'js-cookie'
import { FC } from 'react'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { TokensEnum } from '@/store/user/user.interface'
import { PaginationProduct } from '@/types/product.interface'
import { Catalog } from '@/ui/catalog'
import { Heading, Layout } from '@/ui/index'
import Meta from '@/ui/meta'

const Home: FC<PaginationProduct> = ({ products, length }) => {
	const { user } = useAuth()
	const { logout } = useActions()

	return (
		<Meta title='Home'>
			<Layout>
				<button
					onClick={() => console.log(Cookies.get(TokensEnum.refreshToken))}
				>
					Get refresh
				</button>
				{!!user && <button onClick={() => logout()}>Logout</button>}
				<Heading>Home</Heading>
				<Catalog title='Freshed products' products={products || []} />
			</Layout>
		</Meta>
	)
}

export default Home
