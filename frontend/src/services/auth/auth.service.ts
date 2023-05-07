import Cookies from 'js-cookie'

import { axiosClassic } from '@/api/api.interceptor'
import { saveToStorage } from '@/services/auth/auth.helper'
import {
	AuthEnum,
	IAuthResponse,
	IEmailPassword,
	TokensEnum
} from '@/store/user/user.interface'

export const AuthService = {
	async auth(type: AuthEnum.login | AuthEnum.register, data: IEmailPassword) {
		const response = await axiosClassic<IAuthResponse>({
			url: `/auth/${type}`,
			method: 'POST',
			data
		})

		if (response.data.accessToken) {
			saveToStorage(response.data)

			return response.data
		}
	},

	async getNewTokens() {
		const refreshToken = Cookies.get(TokensEnum.refreshToken)

		const response = await axiosClassic.post<
			string,
			{
				data: IAuthResponse
			}
		>('/auth/login/access-token', { refreshToken })
		if (response.data.accessToken) {
			saveToStorage(response.data)
		}
		return response
	}
}
