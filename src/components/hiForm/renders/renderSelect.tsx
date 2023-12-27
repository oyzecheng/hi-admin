import type { HiFormSelectController } from '@/components/hiForm/controller/hiFormSelectController'
import type { TFormData } from '@/components/hiForm/types'

interface IRenderSelectProps {
  controller: HiFormSelectController
  formData: TFormData
}

export const renderSelect = ({ controller, formData }: IRenderSelectProps) => {
  const config = controller?.getConfig()
  const {
    allowClear,
    disabled,
    bordered,
    size,
    placeholder,
    status,
    showSearch,
    children,
    style,
    onChange
  } = config

  const selectChildren =
    children && 'getChildren' in children ? children.getChildren() : children || []

  return (
    <a-select
      v-model:value={formData[controller.model]}
      allowClear={allowClear}
      disabled={disabled?.value}
      bordered={bordered}
      size={size}
      placeholder={placeholder}
      status={status?.value}
      showSearch={showSearch}
      style={style}
      onChange={onChange}
    >
      {selectChildren &&
        selectChildren.map((item) => (
          <a-select-option value={item.value} disabled={item?.disabled}>
            {item.label}
          </a-select-option>
        ))}
    </a-select>
  )
}
