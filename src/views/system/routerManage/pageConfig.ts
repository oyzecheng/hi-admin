import { useHiTable } from '@/components/hiTable/hooks/useHiTable'
import { useHiPrimaryButton, useHISmallTextButton } from '@/components/hiButton'
import { useDelPopConfirmButton } from '@/components/hiButton/hooks/usePopConfirmButton'
import RouterIcon from '@/router/routerIcon'
import type { IRouter } from '@/api/router'

export const delRouter = useDelPopConfirmButton(
  useHISmallTextButton('删除', { danger: true, auth: 'routerManage.3c85a1d6743c02a0' })
)
export const editRouter = useHISmallTextButton('编辑', { auth: 'routerManage.d7c30928d23eaaff' })
export const topCreateRouter = useHiPrimaryButton('创建路由', {
  auth: 'routerManage.d7c30928d23eaaff'
})

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
      customRender: ({ value }: { value: IRouter['routeIcon'] }) =>
        value ? RouterIcon[value]() : ''
    },
    {
      title: '按钮',
      key: 'buttons'
    },
    { title: '显示/隐藏', key: 'hidden', width: 100 },
    {
      title: '操作',
      key: 'action',
      buttonConfigList: [editRouter, delRouter],
      fixed: 'right',
      width: 150
    }
  ],
  { pagination: false }
)
