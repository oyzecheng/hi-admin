import type { IFormDateRangePicker, TFormItemStatus } from '@/components/hiForm/types'
import { ref } from 'vue'
import { HiFormDateRangePickerController } from '@/components/hiForm/controller/hiFormDateRangePickerController'

interface IUseFormDateRangePickerConfig
  extends Omit<IFormDateRangePicker, 'label' | 'model' | 'status' | 'isShow' | 'disabled'> {
  isShow?: boolean
  disabled?: boolean
  status?: TFormItemStatus
}

export const useFormDateRangePicker = (
  label: IFormDateRangePicker['label'],
  model: IFormDateRangePicker['model'],
  config: IUseFormDateRangePickerConfig = {}
) => {
  const disabled = ref(config.disabled || false)
  const status = ref(config.status)
  const isShow = ref(config.isShow || true)
  return new HiFormDateRangePickerController({ label, model, ...config, disabled, status, isShow })
}
