import { ProfileRequest, UrlEnum } from './types/types'
import { instance } from '@/api/api.interceptor'
import { IFullUser, IUser } from '@/types/user.interface'

export const UserService = {
	async getProfile() {
		return instance<IFullUser>({
			url: `${UrlEnum.users}/profile`,
			method: 'GET'
		})
	},

	async updateProfile(data: ProfileRequest) {
		return instance<IUser>({
			url: `${UrlEnum.users}/profile`,
			method: 'PUT',
			data
		})
	},

	async toggleFavorite(productId: string | number) {
		return instance<IUser>({
			url: `${UrlEnum.users}/profile/favorites/${productId}`,
			method: 'PATCH'
		})
	}
}
