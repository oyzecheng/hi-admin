import { useFormInput, useFormRulesInput, useFormSwitch, useHiForm } from '@/components/hiForm'

const pageTitle = useFormRulesInput('页面名称', 'pageTitle', { rules: true })
const routeName = useFormRulesInput('路由名称', 'routeName', { rules: true })
const RoutePath = useFormInput('路由路径', 'routePath', { defaultValue: '' })
const componentName = useFormRulesInput('组件名', 'componentName', { rules: true })
const routeIcon = useFormRulesInput('图标', 'routeIcon')
const showOrHide = useFormSwitch('隐藏菜单', 'hidden')
const redirectRouteName = useFormInput('跳转路由名称', 'redirectRouteName')

export const newFormController = useHiForm(
  [pageTitle, routeName, RoutePath, componentName, routeIcon, showOrHide, redirectRouteName],
  { layoutCol: 2, buttonListOffset: 3 }
)
