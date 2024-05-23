import { GET, POST, PATH, DELETE } from '@/utils/request'

export const RoleManageList = (params?: any) => GET('/roleManage', params)

export const RoleManageAdd = (params: any) => POST('/roleManage', params)

export const RoleManageUpdate = (id: any, params: any) => PATH(`/roleManage/${id}`, params)

export const RoleManageDelete = (id: any) => DELETE(`/roleManage/${id}`)

export const RoleManageAll = () => GET('/roleManageAll')

export const RoleManageDetail = (id: any) => GET(`/roleManage/${id}`)
