import type { IFormRate, TFormItemStatus } from '@/components/hiForm/types'
import { ref } from 'vue'
import { HiFormRateController } from '@/components/hiForm/controller/hiFormRateController'

interface IUseFormRateConfig
  extends Omit<IFormRate, 'label' | 'model' | 'status' | 'isShow' | 'disabled'> {
  isShow?: boolean
  disabled?: boolean
  status?: TFormItemStatus
}

export const useFormRate = (
  label: IFormRate['label'],
  model: IFormRate['model'],
  config: IUseFormRateConfig = {}
) => {
  const disabled = ref(config.disabled || false)
  const status = ref(config.status)
  const isShow = ref(config.isShow || true)
  return new HiFormRateController({ label, model, ...config, disabled, status, isShow })
}
