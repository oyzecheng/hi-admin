import { GET, POST, PATH, DELETE } from '@/utils/request'
import type { IList, TParams } from '@/api/types'

export interface IProduct {
  id: string
  name: string
  price: number
  description: string
  stock: number
  createAt: number
  cover: string
}

export const ProductList = (params?: TParams) => GET<IList<IProduct[]>>('/products', params)

export const ProductAdd = (params: TParams) => POST<string>('/products', params)

export const ProductUpdate = (id: string, params: TParams) =>
  PATH<IProduct>(`/products/${id}`, params)

export const ProductDelete = (id: string, params?: TParams) =>
  DELETE<string>(`/products/${id}`, params)

export const ProductDetail = (id: string) => GET<IProduct>(`/products/${id}`)
