import { defineStore } from 'pinia'
import { reactive, shallowRef } from 'vue'
import { type RouteRecordRaw } from 'vue-router'
import { layoutRoute } from '@/router/routes'
import { formatToRoute, generateItems, addRouter } from '@/router/tools'
import { UserInfo, UserRoutes } from '@/api/user'

export const useUserStore = defineStore('user', () => {
  const userRoutes = shallowRef<RouteRecordRaw[]>([])
  const userButtons = reactive<string[]>([])
  const info = reactive<any>({ userMenus: [], userInfo: null })

  const getUserRoutes = async () => {
    const { data } = await UserRoutes()
    userRoutes.value = data
    userButtons.splice(0, userButtons.length)
    const userRouteList = formatToRoute(data, ({ buttons }) => {
      if (buttons?.length) {
        userButtons.push(...(buttons?.map((item) => item.key) || []))
      }
    })
    layoutRoute.children = userRouteList
    addRouter(layoutRoute)
    info.userMenus = generateItems(userRouteList)
  }

  const getUserInfo = async () => {
    const { data } = await UserInfo()
    info.userInfo = data
  }

  const initUserConfig = async () => {
    await getUserRoutes()
    info.userInfo = {}
    getUserInfo()
  }

  const validateButtonAuth = (auth: string) => {
    return userButtons.includes(auth)
  }

  return {
    userRoutes,
    info,
    getUserRoutes,
    initUserConfig,
    getUserInfo,
    validateButtonAuth
  }
})
