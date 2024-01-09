import type { IFormInputNumber, TFormItemStatus } from '@/components/hiForm/types'
import { ref } from 'vue'
import { HiFormInputNumberController } from '@/components/hiForm/controller/hiFormInputNumberController'

interface IUseFormInputNumberConfig
  extends Omit<IFormInputNumber, 'label' | 'model' | 'status' | 'isShow' | 'disabled'> {
  isShow?: boolean
  disabled?: boolean
  status?: TFormItemStatus
}

export const useFormInputNumber = (
  label: IFormInputNumber['label'],
  model: IFormInputNumber['model'],
  config: IUseFormInputNumberConfig = {}
) => {
  const disabled = ref(config.disabled || false)
  const status = ref(config.status)
  const isShow = ref(config.isShow || true)
  return new HiFormInputNumberController({ label, model, ...config, disabled, status, isShow })
}
