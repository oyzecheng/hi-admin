import type { HiFormRadioController } from '@/components/hiForm/controller/hiFormRadioController'
import type { TFormData } from '@/components/hiForm/types'

interface IRenderRadioProps {
  controller: HiFormRadioController
  formData: TFormData
}

const renderRadio = ({ controller, formData }: IRenderRadioProps) => {
  const config = controller.getConfig()
  const { children, onChange } = config

  const radioChildren =
    children && 'getChildren' in children ? children.getChildren() : children || []

  return (
    <a-radio-group
      v-model:value={formData[controller.model]}
      options={radioChildren}
      onChange={onChange}
    />
  )
}

export default renderRadio
