import axios from 'axios'

import { getContentType } from './api.helper'
import { errorCatch } from '@/api/api.helper'
import { removeFromStorage } from '@/services/auth/auth.helper'
import { getAccessToken } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'

const axiosOptions = {
	baseURL: process.env.SERVER_URL,
	headers: getContentType()
}

export const axiosClassic = axios.create(axiosOptions)

export const instance = axios.create(axiosOptions)

instance.interceptors.request.use(config => {
	const accessToken = getAccessToken()

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

instance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			await AuthService.getNewTokens()
			try {
				return instance.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') {
					removeFromStorage()
				}
			}

			throw error
		}
	}
)
