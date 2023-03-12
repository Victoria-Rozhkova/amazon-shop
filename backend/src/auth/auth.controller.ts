import { Controller, HttpCode } from '@nestjs/common'
import { Body, Post, UsePipes } from '@nestjs/common/decorators'
import { ValidationPipe } from '@nestjs/common/pipes'
import { AuthDto } from './auth.dto'
import { AuthService } from './auth.service'
import { Auth } from './decorators/auth.decorator'
import { RefreshTokenDto } from './dto/refresh-token.dto'

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('register')
	async register(@Body() dto: AuthDto) {
		return this.authService.register(dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('login')
	async login(@Body() dto: AuthDto) {
		return this.authService.login(dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
  // @Auth()
	@Post('login/access-token')
	async getNewTokens(@Body() dto: RefreshTokenDto) {
		return this.authService.getNewTokens(dto.refreshToken)
	}
}
