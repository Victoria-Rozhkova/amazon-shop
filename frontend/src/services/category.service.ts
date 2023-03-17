import { UrlEnum } from './types/types'
import { instance } from '@/api/api.interceptor'
import { ICategory } from '@/types/category.interface'

export const CategoryService = {
	async getAll() {
		return instance<ICategory[]>({
			url: UrlEnum.categories,
			method: 'GET'
		})
	},

	async getById(id: string | number) {
		return instance<ICategory>({
			url: `${UrlEnum.categories}/${id}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return instance<ICategory>({
			url: `${UrlEnum.categories}/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async create() {
		return instance<ICategory>({
			url: UrlEnum.categories,
			method: 'POST'
		})
	},

	async update(id: string | number, name: string) {
		return instance<ICategory>({
			url: `${UrlEnum.categories}/${id}`,
			method: 'PUT',
			data: { name }
		})
	},

	async delete(id: string | number) {
		return instance<ICategory>({
			url: `${UrlEnum.categories}/${id}`,
			method: 'DELETE'
		})
	}
}
