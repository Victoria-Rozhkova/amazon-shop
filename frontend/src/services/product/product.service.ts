import { IProduct } from '../../types/product.interface';
import { DataFilters, ProductRequest, UrlEnum } from '../types/types';



import { instance } from '@/api/api.interceptor';
import { IReview } from '@/types/review.interface';


export const ProductService = {
	async getAll(queryData: DataFilters = {}) {
		return instance<IProduct[]>({
			url: UrlEnum.products,
			method: 'GET',
			params: queryData
		})
	},

	async getSimilar(productId: number | string) {
		return instance<IProduct[]>({
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
		return instance<IProduct>({
			url: `${UrlEnum.products}/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async getByCategory(categorySlug: string) {
		return instance<IProduct[]>({
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