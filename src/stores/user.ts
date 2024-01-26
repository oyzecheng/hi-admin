import { defineStore } from 'pinia'
import { reactive, shallowRef } from 'vue'
import { type RouteRecordRaw } from 'vue-router'
import { layoutRoute } from '@/router/routes'
import { formatToRoute, generateItems } from '@/router/tools'
import router from '@/router'
import { UserInfo, UserRoutes } from '@/api/user'

export const useUserStore = defineStore('user', () => {
  const userRoutes = shallowRef<RouteRecordRaw[]>([])
  const info = reactive<any>({ userMenus: [], userInfo: null })

  const getUserRoutes = async () => {
    const { data } = await UserRoutes()
    const userRouteList = formatToRoute(data)
    layoutRoute.children = userRouteList
    router.addRoute(layoutRoute)
    router.replace(window.location.pathname + window.location.search)
    info.userMenus = generateItems(userRouteList)
  }

  const getUserInfo = async () => {
    const { data } = await UserInfo()
    info.userInfo = data
  }

  const initUserConfig = () => {
    getUserRoutes()
    info.userInfo = {}
    getUserInfo()
  }

  return {
    userRoutes,
    info,
    getUserRoutes,
    initUserConfig,
    getUserInfo
  }
})
