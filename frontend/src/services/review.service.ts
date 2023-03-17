import { ReviewRequest, UrlEnum } from './types/types'
import { instance } from '@/api/api.interceptor'
import { IReview } from '@/types/review.interface'

export const ReviewService = {
	async getAll() {
		return instance<IReview[]>({
			url: UrlEnum.reviews,
			method: 'GET'
		})
	},

	async leave(productId: string | number, data: ReviewRequest) {
		return instance<IReview>({
			url: `${UrlEnum.reviews}/leave/${productId}`,
			method: 'POST',
			data
		})
	}
}
