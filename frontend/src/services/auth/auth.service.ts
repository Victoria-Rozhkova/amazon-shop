import axios from 'axios'
import Cookies from 'js-cookie'

import { getContentType } from '@/api/api.helper'
import { saveToStorage } from '@/services/auth/auth.helper'
import {
	AuthEnum,
	IAuthResponse,
	IEmailPassword,
	TokensEnum
} from '@/store/user/user.interface'
import { instance } from '@/api/api.interceptor'

export const AuthService = {
	async auth(type: AuthEnum.login | AuthEnum.register, data: IEmailPassword) {
		const response = await instance<IAuthResponse>({
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

		const response = await axios.post<
			string,
			{
				data: IAuthResponse
			}
		>(
			process.env.SERVER_URL + '/auth/login/access-token',
			{ refreshToken },
			{
				headers: getContentType()
			}
		)
		if (response.data.accessToken) {
			saveToStorage(response.data)
		}
		return response
	}
}
