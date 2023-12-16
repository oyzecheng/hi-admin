import { renderInput } from '@/components/hiForm/renders/renderInput'
import { renderSelect } from '@/components/hiForm/renders/renderSelect'
import type { TFormData, TFormItemControllers } from '@/components/hiForm/types'

interface IRenderItemProps {
  controller: TFormItemControllers
  formData: TFormData
}

export const renderItem = ({ controller, formData }: IRenderItemProps) => {
  switch (controller.controllerType) {
    case 'input':
      return renderInput({ controller, formData })
    case 'select':
      return renderSelect({ controller, formData })
    default:
      return null
  }
}
