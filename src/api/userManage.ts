import { DELETE, GET, POST } from '@/utils/request'

export const UserManageList = (params?: any) => GET('/userManage', params)

export const UserManageDelete = (id: string) => DELETE(`/userManage/${id}`)

export const UserManageDetail = (id: string) => GET(`/userManageDetail/${id}`)

export const UserManageAdd = (params: any) => POST('/userManage', params)

export const UserManageUpdate = (id: string, params: any) => POST(`/userManageUpdate/${id}`, params)
