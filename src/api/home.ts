import { GET } from '@/utils/request'
import type { IUser } from '@/api/userManage'
import type { IList } from '@/api/types'

export interface IBestSalesman extends IUser {
  rank: number
  price: number
  product: string
}

export interface ISellWellProduct {
  id: string
  poster: string
  name: string
  price: number
  sellCount: number
}

export const BestSalesman = () => GET<IList<IBestSalesman[]>>('/bestSalesman')

export const SellWellProducts = () => GET<ISellWellProduct[]>('/sellWellProducts')
