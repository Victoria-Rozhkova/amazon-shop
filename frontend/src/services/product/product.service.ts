import { axiosClassic } from '@/api/api.interceptor';
import { IProduct, PaginationProduct } from '@/types/product.interface'
import { DataFilters, ProductRequest, UrlEnum } from '@/services/types/types'

import { IPagination } from '@/types/pagination.interface'
import { instance } from '@/api/api.interceptor'

export const ProductService = {
	async getAll(queryData: DataFilters & IPagination = {}) {
		return axiosClassic<PaginationProduct>({
			url: UrlEnum.products,
			method: 'GET',
			params: queryData
		})
	},

	async getSimilar(productId: number | string) {
		return axiosClassic<IProduct[]>({
			url: `${UrlEnum.products}/similar/${productId}`,
			method: 'GET'
		})
	},

	async getById(id: number | string) {
		return instance<IProduct[]>({
			url: `${UrlEnum.products}/${id}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return axiosClassic<IProduct>({
			url: `${UrlEnum.products}/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async getByCategory(categorySlug: string) {
		return axiosClassic<IProduct[]>({
			url: `${UrlEnum.products}/by-category/${categorySlug}`,
			method: 'GET'
		})
	},

	async create() {
		return instance<IProduct>({
			url: UrlEnum.products,
			method: 'POST'
		})
	},

	async update(id: string | number, data: ProductRequest) {
		return instance<IProduct>({
			url: `${UrlEnum.products}/${id}`,
			method: 'PUT',
			data
		})
	},

	async delete(id: string | number) {
		return instance<IProduct>({
			url: `${UrlEnum.products}/${id}`,
			method: 'DELETE'
		})
	}
}
