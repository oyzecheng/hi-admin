import { GET, POST } from '@/utils/request'

export const RouterList = () => GET('/router')

export const RouterAdd = (params: any) => POST('/router', params)
