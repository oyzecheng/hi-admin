import type { IFormSelect, TFormItemStatus } from '@/components/hiForm/types'
import { ref } from 'vue'
import { HiFormSelectController } from '@/components/hiForm/controller/hiFormSelectController'

interface IUseFormSelectConfig
  extends Omit<IFormSelect, 'label' | 'model' | 'isShow' | 'disabled' | 'status'> {
  isShow?: boolean
  disabled?: boolean
  status?: TFormItemStatus
}

export const useFormSelect = (
  label: IFormSelect['label'],
  model: IFormSelect['model'],
  config: IUseFormSelectConfig = {}
) => {
  const disabled = ref(config.disabled || false)
  const status = ref(config.status)
  const isShow = ref(config.isShow || true)
  return new HiFormSelectController({ label, model, ...config, disabled, status, isShow })
}
