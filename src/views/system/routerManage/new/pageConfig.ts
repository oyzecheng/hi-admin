import { useFormRulesInput, useHiForm } from '@/components/hiForm'
import { useFormSlot } from '@/components/hiForm/hooks/useFormSlot'

const routerName = useFormRulesInput('路由名称', 'routerName')
const name = useFormRulesInput('路由Name', 'name')
const path = useFormRulesInput('路由Path', 'path')
const componentName = useFormRulesInput('组件名', 'componentName')
const iconName = useFormRulesInput('图标', 'iconName')
const buttons = useFormSlot('按钮', 'buttons')

export const newFormController = useHiForm([
  routerName,
  name,
  path,
  componentName,
  iconName,
  buttons
])
