import { HiFormController } from '@/components/hiForm/controller/hiFormController'
import type { IHiForm, TFormItemControllers } from '@/components/hiForm/types'
import { reactive } from 'vue'

export const useHiForm = (configList: TFormItemControllers[], config: IHiForm = {}) => {
  const formData = reactive({})

  return new HiFormController(configList, formData, config)
}
