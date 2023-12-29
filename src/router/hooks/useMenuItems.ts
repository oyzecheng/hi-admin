import { routes } from '@/router/routes'
import { reactive } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

const generateItems = (list: RouteRecordRaw[] = [], parent: any = null): any[] => {
  return list.map((item) => ({
    key: item.name,
    label: item.meta?.title || '',
    title: item.meta?.title || '',
    parentLabel: parent?.meta?.title || '',
    path: `${parent?.path ? `${parent.path}/` : ''}${item.path}`,
    children: item.children ? generateItems(item.children, item) : undefined
  }))
}

export const useMenuItems = () => {
  return reactive(generateItems(routes))
}
