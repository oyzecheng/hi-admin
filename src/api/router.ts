import { DELETE, GET, PATH, POST } from '@/utils/request'
import routerResource from '@/router/routerResource'
import routerIcon from '@/router/routerIcon'
import type { IList } from '@/api/types'

export interface IRouter {
  id: string
  routeName: string
  routePath: string
  componentName: keyof typeof routerResource
  pageTitle: string
  routeIcon?: keyof typeof routerIcon
  redirectRouteName?: string
  sort?: number
  children?: IRouter[]
  buttons?: { key: string; name: string }[]
}

export const RouterList = () => GET<IList<IRouter[]>>('/router')

export const RouterAdd = (params: any) => POST<string>('/router', params)

export const RouterDetail = (id: any) => GET<IRouter>(`/router/${id}`)

export const RouterDelete = (id: any) => DELETE<string>(`/router/${id}`)

export const RouterUpdate = (id: any, params: any) => PATH<IRouter>(`/router/${id}`, params)
