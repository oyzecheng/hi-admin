import type { IFormCascader, TFormItemStatus } from '@/components/hiForm/types'
import { ref } from 'vue'
import { HiFormCascaderController } from '@/components/hiForm/controller/hiFormCascaderController'

interface IUseFormCascaderConfig
  extends Omit<IFormCascader, 'label' | 'model' | 'status' | 'isShow' | 'disabled'> {
  isShow?: boolean
  disabled?: boolean
  status?: TFormItemStatus
}

export const useFormCascader = (
  label: IFormCascader['label'],
  model: IFormCascader['model'],
  config: IUseFormCascaderConfig = {}
) => {
  const disabled = ref(config.disabled || false)
  const status = ref(config.status)
  const isShow = ref(config.isShow || true)
  return new HiFormCascaderController({ label, model, ...config, disabled, status, isShow })
}
