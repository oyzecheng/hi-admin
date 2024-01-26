import { useFormInput, useFormRulesInput, useHiForm } from '@/components/hiForm'

const pageName = useFormRulesInput('页面名称', 'pageName', { rules: true })
const routeName = useFormRulesInput('路由名称', 'routerName', { rules: true })
const RoutePath = useFormInput('路由路径', 'routePath')
const componentName = useFormRulesInput('组件名', 'componentName', { rules: true })
const iconName = useFormRulesInput('图标', 'iconName')

export const newFormController = useHiForm(
  [pageName, routeName, RoutePath, componentName, iconName],
  { layoutCol: 2, buttonListOffset: 3 }
)
