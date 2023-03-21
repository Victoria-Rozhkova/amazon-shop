import { IOrder } from './order.interface'
import { IProduct } from '@/types/product.interface'

export interface IUser {
	id: number
	email: string
	name: string
	avatarPath: string
	phone: string
}

export interface IFullUser extends IUser {
	favorites: IProduct[]
	orders: IOrder[]
}
