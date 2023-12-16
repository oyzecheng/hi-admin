import { HiFormController } from '@/components/hiForm/controller/hiFormController'
import type { TFormItemControllers } from '@/components/hiForm/types'
import { reactive } from 'vue'

export const useHiForm = (configList: TFormItemControllers[]) => {
  const formData = reactive({})

  return new HiFormController(configList, formData)
}
