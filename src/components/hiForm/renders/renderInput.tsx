import type { HiFormInputController } from '@/components/hiForm/controller/hiFormInputController'
import type { TFormData } from '@/components/hiForm/types'

interface IRenderInputProps {
  controller: HiFormInputController
  formData: TFormData
}
export const renderInput = ({ controller, formData }: IRenderInputProps) => {
  const config = controller?.getConfig()
  const { size, disabled, allowClear, bordered, placeholder, status, type, showCount } = config

  return (
    <a-input
      v-model:value={formData[controller.model]}
      size={size}
      disabled={disabled?.value}
      allowClear={allowClear}
      bordered={bordered}
      placeholder={placeholder}
      status={status?.value}
      type={type}
      showCount={showCount}
    ></a-input>
  )
}