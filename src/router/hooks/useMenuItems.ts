import { privateRoutes } from '@/router/routes'
import { reactive } from 'vue'
import { generateItems } from '@/router/tools'

export const useMenuItems = () => {
  return reactive(generateItems(privateRoutes))
}
