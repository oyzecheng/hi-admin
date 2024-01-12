import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const sideCollapsible = ref(false)
  const isLgLayout = ref(false)
  const themeColor = ref('#01A76F')

  const setSideCollapsible = (value = false) => {
    sideCollapsible.value = value
  }

  const setIsLgLayout = (value = false) => {
    isLgLayout.value = value
  }

  const setThemeColor = (value: string) => {
    themeColor.value = value
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
