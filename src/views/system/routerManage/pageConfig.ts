import { useHiTable } from '@/components/hiTable/hooks/useHiTable'
import { useFormSwitch } from '@/components/hiForm'
import { useHiPrimaryButton, useHISmallTextButton } from '@/components/hiButton'
import { useDelPopConfirmButton } from '@/components/hiButton/hooks/usePopConfirmButton'
import RouterIcon from '@/router/routerIcon'

export const createButton = useHISmallTextButton('按钮管理')
export const delRouter = useDelPopConfirmButton(useHISmallTextButton('删除', { danger: true }))
export const editRouter = useHISmallTextButton('编辑')
export const topCreateRouter = useHiPrimaryButton('创建路由')

export const tableController = useHiTable(
  [
    { title: '页面名称', key: 'pageTitle' },
    {
      title: '路由名称',
      key: 'routeName'
    },
    { title: '路由路径', key: 'routePath' },
    { title: '组件名', key: 'componentName' },
    {
      title: '图标',
      key: 'routeIcon',
      width: 80,
      customRender: ({ value }) => (value ? RouterIcon[value]() : '')
    },
    { title: '显示/隐藏', key: 'hidden', width: 100 },
    {
      title: '操作',
      key: 'action',
      buttonConfigList: [editRouter, createButton, delRouter],
      fixed: 'right',
      width: 220
    }
  ],
  { pagination: false }
)

export const routeSwitch = useFormSwitch('', 'hidden', {
  checkedChildren: '显示',
  unCheckedChildren: '隐藏'
})
