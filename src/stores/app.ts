import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const sideCollapsible = ref(false)
  const isLgLayout = ref(false)

  const setSideCollapsible = (value = false) => {
    sideCollapsible.value = value
  }

  const setIsLgLayout = (value = false) => {
    isLgLayout.value = value
  }

  return { sideCollapsible, setSideCollapsible, isLgLayout, setIsLgLayout }
})
