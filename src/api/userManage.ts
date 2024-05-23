import { DELETE, GET, PATH, POST } from '@/utils/request'

export const UserManageList = (params?: any) => GET('/userManage', params)

export const UserManageDelete = (id: string, params: any) => DELETE(`/userManage/${id}`, params)

export const UserManageDetail = (id: string) => GET(`/userManage/${id}`)

export const UserManageAdd = (params: any) => POST('/userManage', params)

export const UserManageUpdate = (id: string, params: any) => PATH(`/userManage/${id}`, params)
