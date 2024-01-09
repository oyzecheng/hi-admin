import type { IFormCheckbox, TFormItemStatus } from '@/components/hiForm/types'
import { ref } from 'vue'
import { HiFormCheckboxController } from '@/components/hiForm/controller/hiFormCheckboxController'

interface IUseFormCheckboxConfig
  extends Omit<IFormCheckbox, 'label' | 'model' | 'isShow' | 'disabled' | 'status'> {
  isShow?: boolean
  disabled?: boolean
  status?: TFormItemStatus
}

export const useFormCheckbox = (
  label: IFormCheckbox['label'],
  model: IFormCheckbox['model'],
  config: IUseFormCheckboxConfig = {}
) => {
  const disabled = ref(config.disabled || false)
  const status = ref(config.status)
  const isShow = ref(config.isShow || true)
  return new HiFormCheckboxController({ label, model, ...config, disabled, status, isShow })
}
