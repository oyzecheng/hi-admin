import { defineStore } from 'pinia'
import { ref } from 'vue'
import { GetItem, SetItem } from '@/utils/storage'
import { THEME_COLOR } from '@/constant/app'

export const useAppStore = defineStore('app', () => {
  const sideCollapsible = ref(false)
  const isLgLayout = ref(false)
  const themeColor = ref(GetItem(THEME_COLOR) || 'rgba(1,167,111,1)')

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

  return {
    sideCollapsible,
    setSideCollapsible,
    isLgLayout,
    setIsLgLayout,
    themeColor,
    setThemeColor
  }
})
