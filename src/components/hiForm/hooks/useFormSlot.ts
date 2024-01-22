import type { IFormSlot, TFormItemStatus } from '@/components/hiForm/types'
import { ref } from 'vue'
import { HiFormSlotController } from '@/components/hiForm/controller/hiFormSlotController'

interface IUseFormSlotConfig
  extends Omit<IFormSlot, 'label' | 'model' | 'status' | 'isShow' | 'disabled'> {
  isShow?: boolean
  disabled?: boolean
  status?: TFormItemStatus
}

export const useFormSlot = (
  label: IFormSlot['label'],
  model: IFormSlot['model'],
  config: IUseFormSlotConfig = {}
) => {
  const disabled = ref(config.disabled || false)
  const status = ref(config.status)
  const isShow = ref(config.isShow || true)
  return new HiFormSlotController({ label, model, ...config, disabled, status, isShow })
}
