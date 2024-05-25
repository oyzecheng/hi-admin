import { DELETE, GET, type IResponse, PATH, POST } from '@/utils/request'
import routerResource from '@/router/routerResource'
import routerIcon from '@/router/routerIcon'

export interface IRouter {
  id: string
  routeName: string
  routePath: string
  componentName: keyof typeof routerResource
  pathTitle: string
  routeIcon?: keyof typeof routerIcon
  redirectRouteName?: string
  sort?: number
  children?: IRouter[]
}

export const RouterList = () => GET<IResponse<IRouter[]>>('/router')

export const RouterAdd = (params: any) => POST<string>('/router', params)

export const RouterDetail = (id: any) => GET<IRouter>(`/router/${id}`)

export const RouterDelete = (id: any) => DELETE<string>(`/router/${id}`)

export const RouterUpdate = (id: any, params: any) => PATH<IRouter>(`/router/${id}`, params)
