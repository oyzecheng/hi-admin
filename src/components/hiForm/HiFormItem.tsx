import type { IFormItemRule, TFormData, TFormItemControllers } from '@/components/hiForm/types'
import { renderItem } from '@/components/hiForm/renders'

interface IHiFormItemProps {
  controller: TFormItemControllers
  formData: TFormData
  rules: IFormItemRule[] | undefined
}

const HiFormItem = ({ controller, formData, rules }: IHiFormItemProps) => {
  const config = controller.getConfig()
  const { label, model, isShow } = config

  return isShow?.value ? (
    <a-form-item label={label} name={model} rules={rules}>
      {renderItem({ controller, formData })}
    </a-form-item>
  ) : null
}

export default HiFormItem
