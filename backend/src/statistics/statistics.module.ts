import { PrismaService } from 'src/prisma.service'
import { Module } from '@nestjs/common'
import { StatisticsService } from './statistics.service'
import { StatisticsController } from './statistics.controller'
import { UserService } from 'src/user/user.service'

@Module({
	controllers: [StatisticsController],
	providers: [StatisticsService, PrismaService, UserService]
})
export class StatisticsModule {}
