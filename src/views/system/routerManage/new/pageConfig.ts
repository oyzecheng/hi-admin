import {
  useFormCascader,
  useFormInput,
  useFormInputNumber,
  useFormRulesInput,
  useFormSwitch,
  useHiForm
} from '@/components/hiForm'
import { useDic } from '@/components/hiDic'
import { useUserStore } from '@/stores/user'
import { useFormSlot } from '@/components/hiForm/hooks/useFormSlot'

const routerDic = useDic()
routerDic.setLoadFn(
  () => {
    const userStore = useUserStore()
    return userStore.userRoutes
  },
  'pageTitle',
  'id'
)

const pageTitle = useFormRulesInput('页面名称', 'pageTitle', { rules: true })
const routeName = useFormRulesInput('路由名称', 'routeName', { rules: true })
const RoutePath = useFormInput('路由路径', 'routePath', { defaultValue: '' })
const componentName = useFormRulesInput('组件名', 'componentName', { rules: true })
const routeIcon = useFormInput('图标', 'routeIcon')
const showOrHide = useFormSwitch('隐藏菜单', 'hidden')
const redirectRouteName = useFormInput('跳转路由名称', 'redirectRouteName')
const routeSort = useFormInputNumber('排序', 'sort')
const parentRouter = useFormCascader('父级路由', 'parentId', { children: routerDic, format: true })
const buttons = useFormSlot('按钮', 'buttons', { defaultValue: [] })

export const newFormController = useHiForm(
  [
    pageTitle,
    routeName,
    RoutePath,
    componentName,
    routeIcon,
    showOrHide,
    parentRouter,
    redirectRouteName,
    routeSort,
    buttons
  ],
  { layoutCol: 2, buttonListOffset: 3, labelCol: { span: 6 } }
)
