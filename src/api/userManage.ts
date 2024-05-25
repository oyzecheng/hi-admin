import { DELETE, GET, PATH, POST } from '@/utils/request'
import type { IList, TParams, TStatus } from '@/api/types'

export interface IUser {
  address: string
  id: string
  avatar: string
  email: string
  name: string
  role: string
  status: TStatus
  createAt: number
}

export const UserManageList = (params?: TParams) => GET<IList<IUser[]>>('/userManage', params)

export const UserManageDelete = (id: string, params?: TParams) =>
  DELETE<string>(`/userManage/${id}`, params)

export const UserManageDetail = (id: string) => GET<IUser>(`/userManage/${id}`)

export const UserManageAdd = (params: TParams) => POST<string>('/userManage', params)

export const UserManageUpdate = (id: string, params: TParams) =>
  PATH<IUser>(`/userManage/${id}`, params)
