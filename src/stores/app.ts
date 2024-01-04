import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const sideCollapsible = ref(false)

  const setSideCollapsible = (value = false) => {
    sideCollapsible.value = value
  }

  console.log('sideCollapsible', sideCollapsible)

  return { sideCollapsible, setSideCollapsible }
})
