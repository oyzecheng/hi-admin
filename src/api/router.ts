import { DELETE, GET, PATH, POST } from '@/utils/request'

export const RouterList = () => GET('/router')

export const RouterAdd = (params: any) => POST('/router', params)

export const RouterDetail = (id: any) => GET(`/router/${id}`)

export const RouterDelete = (id: any) => DELETE(`/router/${id}`)

export const RouterUpdate = (id: any, params: any) => PATH(`/router/${id}`, params)
