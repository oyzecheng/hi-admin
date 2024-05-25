import { GET, POST, PATH, DELETE } from '@/utils/request'
import type { TStatus, TParams, IList } from '@/api/types'

export interface IRole {
  id: string
  name: string
  description: string
  status: TStatus
  auth: string[]
}

export const RoleManageList = (params?: TParams) => GET<IList<IRole[]>>('/roleManage', params)

export const RoleManageAdd = (params: TParams) => POST<string>('/roleManage', params)

export const RoleManageUpdate = (id: string, params: TParams) =>
  PATH<string>(`/roleManage/${id}`, params)

export const RoleManageDelete = (id: string) => DELETE<string>(`/roleManage/${id}`)

export const RoleManageAll = () => GET<IRole[]>('/roleManageAll')

export const RoleManageDetail = (id: string) => GET<IRole>(`/roleManage/${id}`)
