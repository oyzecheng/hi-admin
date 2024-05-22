import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { GetItem, SetItem } from '@/utils/storage'
import { NAVIGATION_BAR, NAVIGATION_BAR_SHOW, THEME_COLOR } from '@/constant/app'
import { DataDictionaryAll } from '@/api/dataDictionary'
import type { INavigationItem } from '@/stores/types'
import type { RouteLocationNormalizedLoaded } from 'vue-router'

export const useAppStore = defineStore('app', () => {
  const sideCollapsible = ref(false)
  const isLgLayout = ref(false)
  const lgLayoutSideShow = ref(false)
  const themeColor = ref(GetItem(THEME_COLOR) || 'rgba(1,167,111,1)')
  const dataDictionary = reactive<any[]>([])
  const isGetDataDic = ref(false)
  const navigationBarShow = ref(!!GetItem(NAVIGATION_BAR_SHOW))
  const navigationBarList = reactive<INavigationItem[]>(GetItem(NAVIGATION_BAR) || [])

  const setSideCollapsible = (value = false) => {
    sideCollapsible.value = value
  }

  const setIsLgLayout = (value = false) => {
    isLgLayout.value = value
  }

  const setThemeColor = (value: string) => {
    themeColor.value = value
    SetItem(THEME_COLOR, value)
  }

  const setLgLayoutSideShow = (value = false) => {
    lgLayoutSideShow.value = value
  }

  const getDicAll = async () => {
    const data: any = await DataDictionaryAll()
    if (dataDictionary.length) {
      dataDictionary.splice(0, dataDictionary.length)
    }
    dataDictionary.push(...(data || []))
  }

  const getDic = async (type: string) => {
    if (!isGetDataDic.value) {
      try {
        await getDicAll()
        isGetDataDic.value = true
      } catch (err) {
        isGetDataDic.value = false
      }
    }
    return dataDictionary.filter((item: any) => item.type === type)
  }

  const setNavigationBarShow = (value = true) => {
    navigationBarShow.value = value
    SetItem(NAVIGATION_BAR_SHOW, value)
  }

  const findNavigationIndex = (name: string) => {
    return navigationBarList.findIndex((item) => item.name === name)
  }

  const addNavigation = (item: INavigationItem) => {
    const index = findNavigationIndex(item.name)
    if (index === -1) {
      navigationBarList.push(item)
    } else {
      navigationBarList[index] = item
    }
    SetItem(NAVIGATION_BAR, navigationBarList)
  }

  const removeNavigation = (name: string) => {
    const index = findNavigationIndex(name)
    if (index !== -1) {
      navigationBarList.splice(index, 1)
    }
  }

  const generateNavigationItemByRoute = (route: RouteLocationNormalizedLoaded) => {
    return {
      name: route.name || '',
      params: route.params,
      title: route.matched
        .slice(-2)
        .map((item) => item?.meta?.title || '')
        .join('')
    }
  }

  return {
    sideCollapsible,
    setSideCollapsible,
    isLgLayout,
    setIsLgLayout,
    themeColor,
    setThemeColor,
    lgLayoutSideShow,
    setLgLayoutSideShow,
    getDic,
    navigationBarShow,
    setNavigationBarShow,
    navigationBarList,
    addNavigation,
    removeNavigation,
    findNavigationIndex,
    generateNavigationItemByRoute
  }
})
