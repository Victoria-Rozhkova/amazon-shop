import { useRouter } from 'next/router'
import React, { FC, PropsWithChildren } from 'react'

import { ComponentAuthFields } from './auth-page.types'
import { useAuth } from '@/hooks/useAuth'

const CheckRole: FC<PropsWithChildren<ComponentAuthFields>> = ({
	Component: { isUser },
	children
}) => {
	const { user } = useAuth()

	const router = useRouter()

	if (user && isUser) return <>{children}</>

	router.pathname !== '/auth' && router.replace('/auth')
	return null
}

export default CheckRole
