import type { TFormData } from '@/components/hiForm/types'
import type { HiFormCheckboxController } from '@/components/hiForm/controller/hiFormCheckboxController'

interface IRenderCheckboxProps {
  controller: HiFormCheckboxController
  formData: TFormData
}

const renderCheckbox = ({ controller, formData }: IRenderCheckboxProps) => {
  const config = controller.getConfig()
  const { children, onChange } = config

  const checkboxChildren =
    children && 'getChildren' in children ? children.getChildren() : children || []

  return (
    <a-checkbox-group
      v-model:value={formData[controller.model]}
      options={checkboxChildren}
      onChange={onChange}
    />
  )
}

export default renderCheckbox
