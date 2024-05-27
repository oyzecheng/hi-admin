import { GET, POST, PATH, DELETE } from '@/utils/request'
import type { TParams } from '@/api/types'

export const ProductList = (params?: TParams) => GET('/products', params)

export const ProductAdd = (params: TParams) => POST('/products', params)

export const ProductUpdate = (id: string, params: TParams) => PATH(`/products/${id}`, params)

export const ProductDelete = (id: string, params?: TParams) => DELETE(`/products/${id}`, params)

export const ProductDetail = (id: string) => GET(`/products/${id}`)
