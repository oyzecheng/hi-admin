import type { THiDicChildren } from '@/components/hiDic/types'
import { HiDicController } from '@/components/hiDic/controller/hiDicController'
import { reactive } from 'vue'

export const useDic = (chldren: THiDicChildren = []) => {
  const refChildren = reactive(chldren)

  return new HiDicController(refChildren)
}
