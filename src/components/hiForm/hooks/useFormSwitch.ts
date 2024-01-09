import type { IFormSwitch, TFormItemStatus } from '@/components/hiForm/types'
import { ref } from 'vue'
import { HiFormSwitchController } from '@/components/hiForm/controller/hiFormSwitchController'

interface IUseFormSwitchConfig
  extends Omit<IFormSwitch, 'label' | 'model' | 'status' | 'isShow' | 'disabled'> {
  isShow?: boolean
  disabled?: boolean
  status?: TFormItemStatus
}

export const useFormSwitch = (
  label: IFormSwitch['label'],
  model: IFormSwitch['model'],
  config: IUseFormSwitchConfig = {}
) => {
  const disabled = ref(config.disabled || false)
  const status = ref(config.status)
  const isShow = ref(config.isShow || true)
  return new HiFormSwitchController({ label, model, ...config, disabled, status, isShow })
}
