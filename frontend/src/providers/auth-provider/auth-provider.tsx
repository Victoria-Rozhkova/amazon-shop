import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { FC, PropsWithChildren, useEffect } from 'react'

import { ComponentAuthFields } from './auth-page.types'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { getAccessToken } from '@/services/auth/auth.helper'
import { TokensEnum } from '@/store/user/user.interface'

const DynamicCheckRole = dynamic(() => import('./check-role'), { ssr: false })

const AuthProvider: FC<PropsWithChildren<ComponentAuthFields>> = ({
	Component: { isUser },
	children
}) => {
	const { user } = useAuth()
	const { checkAuth, logout } = useActions()
	const { pathname } = useRouter()

	useEffect(() => {
		const accessToken = getAccessToken()
		if (accessToken) checkAuth()
	}, [])

	useEffect(() => {
		const resfeshToken = Cookies.get(TokensEnum.refreshToken)
		if (!resfeshToken && user) logout()
	}, [pathname])

	return isUser ? (
		<DynamicCheckRole Component={{ isUser }} children={children} />
	) : (
		<>{children}</>
	)
}

export default AuthProvider
