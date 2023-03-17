import { IUser } from '@/types/user.interface';
import { ICartItem } from './cart.interface'

export enum OrderStatusEnum {
	PENDING = 'PENDING',
	PAYED = 'PAYED',
	SHIPPED = 'SHIPPED',
	DELIVERED = 'DELIVERED'
}

export interface IOrder {
	id: number
	createdAt: string
	items: ICartItem[]
	status: OrderStatusEnum
  user: IUser
}
