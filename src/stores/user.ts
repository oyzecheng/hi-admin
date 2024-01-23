import { defineStore } from 'pinia'
import { reactive, shallowRef } from 'vue'
import { type RouteRecordRaw } from 'vue-router'
import { privateRoutes, layoutRoute } from '@/router/routes'
import { generateItems } from '@/router/tools'
import router from '@/router'
import { UserInfo } from '@/api/user'

export const useUserStore = defineStore('user', () => {
  const userRoutes = shallowRef<RouteRecordRaw[]>([])
  const info = reactive<any>({ userMenus: [], userInfo: null })

  const getUserRoutes = () => {}

  const getUserInfo = async () => {
    const { data } = await UserInfo()
    info.userInfo = data
  }

  const initUserConfig = () => {
    layoutRoute.children = privateRoutes
    router.addRoute(layoutRoute)
    info.userMenus = generateItems(privateRoutes)
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
