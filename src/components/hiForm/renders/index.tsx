import { renderInput } from '@/components/hiForm/renders/renderInput'
import { renderSelect } from '@/components/hiForm/renders/renderSelect'
import type { TFormData, TFormItemControllers } from '@/components/hiForm/types'
import renderCheckbox from '@/components/hiForm/renders/renderCheckbox'
import renderRadio from '@/components/hiForm/renders/renderRadio'

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
    case 'checkbox':
      return renderCheckbox({ controller, formData })
    case 'radio':
      return renderRadio({ controller, formData })
    default:
      return null
  }
}