import Cookies from 'js-cookie'

import { IAuthResponse, ITokens, TokensEnum } from '@/store/user/user.interface'

export const getAccessToken = () => {
	const accessToken = Cookies.get(TokensEnum.accessToken)
	return accessToken || null
}

export const saveTokenStorage = (data: ITokens) => {
	Cookies.set(TokensEnum.accessToken, data.accessToken)
	Cookies.set(TokensEnum.refreshToken, data.refreshToken)
}

export const removeFromStorage = () => {
	Cookies.remove(TokensEnum.accessToken)
	Cookies.remove(TokensEnum.refreshToken)
	localStorage.removeItem('user')
}

export const saveToStorage = (data: IAuthResponse) => {
	localStorage.setItem('user', JSON.stringify(data.user))
}
