import { UrlEnum } from './types/types'
import { instance } from '@/api/api.interceptor'
import { IStatistic } from '@/types/statistic.interface'

export const StatisticService = {
	async getMain() {
		return instance<IStatistic[]>({
			url: `${UrlEnum.statistics}/main`,
			method: 'GET'
		})
	}
}
