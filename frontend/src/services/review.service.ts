import { axiosClassic } from './../api/api.interceptor';
import { ReviewRequest, UrlEnum } from './types/types'
import { instance } from '@/api/api.interceptor'
import { IReview } from '@/types/review.interface'

export const ReviewService = {
	async getAll() {
		return axiosClassic<IReview[]>({
			url: UrlEnum.reviews,
			method: 'GET'
		})
	},

	async leave(productId: string | number, data: ReviewRequest) {
		return axiosClassic<IReview>({
			url: `${UrlEnum.reviews}/leave/${productId}`,
			method: 'POST',
			data
		})
	},

	async getAverageByProduct(productId: string | number) {
		return instance<number>({
			url: `${UrlEnum.reviews}/average-by-product/${productId}`,
			method: 'GET'
		})
	}
}
