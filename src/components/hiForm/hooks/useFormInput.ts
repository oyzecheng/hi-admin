import { HiFormInputController } from '@/components/hiForm/controller/hiFormInputController'
import type { IFormInput, TFormItemStatus } from '@/components/hiForm/types'
import { ref } from 'vue'

interface IUseFormInputConfig
  extends Omit<IFormInput, 'label' | 'model' | 'status' | 'isShow' | 'disabled'> {
  isShow?: boolean
  disabled?: boolean
  status?: TFormItemStatus
}

export const useFormInput = (
  label: IFormInput['label'],
  model: IFormInput['model'],
  config: IUseFormInputConfig = {}
) => {
  const disabled = ref(config.disabled || false)
  const status = ref(config.status)
  const isShow = ref(config.isShow || true)
  return new HiFormInputController({ label, model, ...config, disabled, status, isShow })
}
