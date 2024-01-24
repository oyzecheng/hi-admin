import { HiFormController } from '@/components/hiForm/controller/hiFormController'
import type { IHiForm, TFormConfigList } from '@/components/hiForm/types'
import { reactive, ref } from 'vue'

export const useHiForm = (configList: TFormConfigList, config: IHiForm = {}) => {
  const formData = reactive({})

  return new HiFormController(configList, formData, config)
}
