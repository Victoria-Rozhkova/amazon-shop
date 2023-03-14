import { Auth } from './../auth/decorators/auth.decorator'
import { Controller, Get } from '@nestjs/common'
import { OrderService } from './order.service'
import { CurrentUser } from 'src/auth/decorators/user.decorator'

@Controller('orders')
export class OrderController {
	constructor(private readonly orderService: OrderService) {}

	@Get()
	@Auth()
	async getOrders(@CurrentUser('id') id: number) {
		return this.orderService.getAll(id)
	}
}
