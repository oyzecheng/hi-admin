import type {
  IFormItemRule,
  TFormData,
  TFormItemControllers,
  TFormRules
} from '@/components/hiForm/types'
import RenderItem from '@/components/hiForm/renders/RenderItem.vue'
import { useSlots } from 'vue'

interface IHiFormItemProps {
  // controller: TFormItemControllers
  config: TFormItemControllers | TFormItemControllers[]
  formData: TFormData
  rules: TFormRules
  layoutCol?: number
}

const HiFormItem = ({ config, formData, rules, layoutCol }: IHiFormItemProps) => {
  if (Array.isArray(config)) {
    return (
      <a-row gutter={[16, 16]}>
        {config.map((controller) => {
          const { colSpan } = controller.getConfig()
          return (
            <a-col key={controller.model} span={colSpan || 24 / (layoutCol || config.length)}>
              {renderItem({ controller, formData, itemRules: rules[controller.model] })}
            </a-col>
          )
        })}
      </a-row>
    )
  } else {
    return renderItem({ controller: config, formData, itemRules: rules[config.model] })
  }
}

interface IRenderItemProps {
  controller: TFormItemControllers
  formData: TFormData
  itemRules: IFormItemRule[] | undefined
}

const renderItem = ({ controller, formData, itemRules }: IRenderItemProps) => {
  const config = controller.getConfig()
  const { label, model, isShow, colon, extra, labelAlign, labelCol, wrapperCol, tooltip } = config
  const slots = useSlots()

  const renderSlot = () => {
    return slots[model]?.({ config })
  }

  return isShow?.value ? (
    <a-form-item
      label={label}
      name={model}
      rules={itemRules}
      colon={colon}
      extra={extra}
      labelAlign={labelAlign}
      labelCol={labelCol}
      wrapperCol={wrapperCol}
      tooltip={tooltip}
    >
      {controller.controllerType === 'slot' ? (
        renderSlot()
      ) : (
        <RenderItem controller={controller} formData={formData} />
      )}
    </a-form-item>
  ) : null
}

export default HiFormItem
