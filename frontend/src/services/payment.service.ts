import { UrlEnum } from './types/types'
import { instance } from '@/api/api.interceptor'
import { IPaymentResponse } from '@/types/payment.interface'

export const PaymentService = {
	async createPayment(amount: number) {
		return instance.post<IPaymentResponse>(UrlEnum.payment, {
			amount
		})
	}
}
