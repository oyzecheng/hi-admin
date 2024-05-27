import type { RouteRecordRaw } from 'vue-router'
import RouterIcon from '@/router/routerIcon'
import routerResource from '@/router/routerResource'
import router from '@/router'
import { tailRoute } from '@/router/routes'
import type { IRouter } from '@/api/router'

export const generateItems = (list: RouteRecordRaw[] = [], parent: any = null): any[] => {
  return list
    .filter((item) => !item?.meta?.hidden)
    .map((item) => {
      const iconKey = item.meta?.icon as IRouter['routeIcon']
      return {
        key: item.name,
        label: item.meta?.title || '',
        title: item.meta?.title || '',
        parentLabel: parent?.meta?.title || '',
        path: `${parent?.path ? `${parent.path}/` : ''}${item.path}`,
        children: item.children?.filter((r) => r.meta?.hidden !== true).length
          ? generateItems(item.children?.filter((r) => r.meta?.hidden !== true), item)
          : undefined,
        icon: iconKey ? RouterIcon[iconKey] : undefined
      }
    })
}

export const formatToRoute = (list = [], callback?: (item: IRouter) => any): any[] => {
  return list.map((item) => {
    callback && callback(item)
    const {
      routeName,
      routePath,
      componentName,
      pageTitle,
      hidden,
      routeIcon,
      redirectRouteName,
      children
    } = item
    return {
      name: routeName,
      path: routePath,
      component: routerResource[componentName],
      redirect: redirectRouteName
        ? () => {
            return { name: redirectRouteName }
          }
        : undefined,
      children: children ? formatToRoute(children, callback) : undefined,
      meta: { title: pageTitle, hidden, icon: routeIcon }
    }
  })
}

export const addRouter = (route: RouteRecordRaw) => {
  router.addRoute(route)
  tailRoute.forEach((item) => {
    router.addRoute(item)
  })
  router.replace(window.location.pathname + window.location.search)
}
