import type { IFormUpload, TFormItemStatus } from '@/components/hiForm/types'
import { ref } from 'vue'
import { HiFormUploadController } from '@/components/hiForm/controller/hiFormUploadController'

interface IUseFormUploadConfig
  extends Omit<IFormUpload, 'label' | 'model' | 'status' | 'isShow' | 'disabled'> {
  isShow?: boolean
  disabled?: boolean
  status?: TFormItemStatus
}

export const useFormUpload = (
  label: IFormUpload['label'],
  model: IFormUpload['model'],
  config: IUseFormUploadConfig = {}
) => {
  const disabled = ref(config.disabled || false)
  const status = ref(config.status)
  const isShow = ref(config.isShow || true)
  return new HiFormUploadController({ label, model, ...config, disabled, status, isShow })
}
