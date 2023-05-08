import { useProfile } from '@/hooks/useProfile'
import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'
import { Catalog } from '@/ui/catalog'
import { Layout } from '@/ui/index'
import Meta from '@/ui/meta'

const FavoritesPage: NextPageAuth = () => {
	const { profile } = useProfile()
	return (
		<Meta title='Favorites'>
			<Layout>
				<Catalog products={profile?.favorites || []} />
			</Layout>
		</Meta>
	)
}

FavoritesPage.isUser = true

export default FavoritesPage
