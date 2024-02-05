import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { GetItem, SetItem } from '@/utils/storage'
import { THEME_COLOR } from '@/constant/app'
import { DataDictionaryAll } from '@/api/dataDictionary'

export const useAppStore = defineStore('app', () => {
  const sideCollapsible = ref(false)
  const isLgLayout = ref(false)
  const lgLayoutSideShow = ref(false)
  const themeColor = ref(GetItem(THEME_COLOR) || 'rgba(1,167,111,1)')
  const dataDictionary = reactive<any[]>([])
  const isGetDataDic = ref(false)

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

  return {
    sideCollapsible,
    setSideCollapsible,
    isLgLayout,
    setIsLgLayout,
    themeColor,
    setThemeColor,
    lgLayoutSideShow,
    setLgLayoutSideShow,
    getDic
  }
})
