import type { IFormRadio, TFormItemStatus } from '@/components/hiForm/types'
import { ref } from 'vue'
import { HiFormRadioController } from '@/components/hiForm/controller/hiFormRadioController'

interface IUseFormRadioConfig
  extends Omit<IFormRadio, 'label' | 'model' | 'isShow' | 'disabled' | 'status'> {
  isShow?: boolean
  disabled?: boolean
  status?: TFormItemStatus
}

export const useFormRadio = (
  label: IFormRadio['label'],
  model: IFormRadio['model'],
  config: IUseFormRadioConfig = {}
) => {
  const disabled = ref(config.disabled || false)
  const status = ref(config.status)
  const isShow = ref(config.isShow || true)
  return new HiFormRadioController({ label, model, ...config, disabled, status, isShow })
}
