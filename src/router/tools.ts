import type { RouteRecordRaw } from 'vue-router'
import RouterIcon from '@/router/routerIcon'

export const generateItems = (list: RouteRecordRaw[] = [], parent: any = null): any[] => {
  return list
    .filter((item) => !item?.meta?.hidden)
    .map((item) => ({
      key: item.name,
      label: item.meta?.title || '',
      title: item.meta?.title || '',
      parentLabel: parent?.meta?.title || '',
      path: `${parent?.path ? `${parent.path}/` : ''}${item.path}`,
      children: item.children ? generateItems(item.children, item) : undefined,
      icon: RouterIcon[item.meta?.icon as string]
    }))
}
