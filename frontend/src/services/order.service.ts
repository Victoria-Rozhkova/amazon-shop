import { UrlEnum } from './types/types'
import { instance } from '@/api/api.interceptor'
import { IOrder } from '@/types/order.interface'

export const OrderService = {
	async getAll() {
		return instance<IOrder[]>({
			url: UrlEnum.orders,
			method: 'GET'
		})
	}
}
