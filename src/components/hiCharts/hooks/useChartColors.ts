import { useAppStore } from '@/stores/app'

export const useChartColors = () => {
  const appStore = useAppStore()

  return [appStore.themeColor, '#FFAB00', '#00B8D9', '#FF5631']
}
