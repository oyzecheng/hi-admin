import { useHiTable } from '@/components/hiTable/hooks/useHiTable'
import { useFormInput, useFormSwitch, useHiForm } from '@/components/hiForm'
import { useHiSmallPrimaryTextButton, useHISmallTextButton } from '@/components/hiButton'
import { useDelPopConfirmButton } from '@/components/hiButton/hooks/usePopConfirmButton'
import RouterIcon from '@/router/routerIcon'

const routerName = useFormInput('路由名称', 'routerName')

export const searchController = useHiForm([routerName], { layout: 'inline' })

export const createRouter = useHiSmallPrimaryTextButton('创建路由')
export const createButton = useHISmallTextButton('按钮管理')
export const delRouter = useDelPopConfirmButton(useHISmallTextButton('删除', { danger: true }))

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
      customRender: ({ value }) => (value ? RouterIcon[value]() : '')
    },
    { title: '显示/隐藏', key: 'hidden' },
    {
      title: '操作',
      key: 'action',
      buttonConfigList: [createRouter, createButton, delRouter],
      fixed: 'right',
      width: 250
    }
  ],
  { pagination: false }
)

export const routeSwitch = useFormSwitch('', 'hidden', {
  checkedChildren: '显示',
  unCheckedChildren: '隐藏'
})
