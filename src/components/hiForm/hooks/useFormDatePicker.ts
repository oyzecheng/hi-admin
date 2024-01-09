import type { IFormDatePicker, TFormItemStatus } from '@/components/hiForm/types'
import { ref } from 'vue'
import { HiFormDatePickerController } from '@/components/hiForm/controller/hiFormDatePickerController'

interface IUseFormDatePickerConfig
  extends Omit<IFormDatePicker, 'label' | 'model' | 'status' | 'isShow' | 'disabled'> {
  isShow?: boolean
  disabled?: boolean
  status?: TFormItemStatus
}

export const useFormDatePicker = (
  label: IFormDatePicker['label'],
  model: IFormDatePicker['model'],
  config: IUseFormDatePickerConfig = {}
) => {
  const disabled = ref(config.disabled || false)
  const status = ref(config.status)
  const isShow = ref(config.isShow || true)
  return new HiFormDatePickerController({ label, model, ...config, disabled, status, isShow })
}
