import { NextPage } from 'next'

import Button from '@/ui/button/button'
import Meta from '@/ui/meta'

const Auth: NextPage = () => {
	return (
		<Meta title='Auth'>
			<Button variant='orange'>Auth</Button>
		</Meta>
	)
}

export default Auth
