import { DELETE, GET } from '@/utils/request'

export const UserManageList = (params?: any) => GET('/userManage', params)

export const UserManageDelete = (id: string) => DELETE(`/userManage/${id}`)

export const UserManageDetail = (id: string) => GET(`/userManageDetail/${id}`)
