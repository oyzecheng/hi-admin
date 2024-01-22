import { useHiTable } from '@/components/hiTable/hooks/useHiTable'
import { useFormInput, useHiForm } from '@/components/hiForm'
import { useHiSmallPrimaryTextButton, useHISmallTextButton } from '@/components/hiButton'
import { useDelPopConfirmButton } from '@/components/hiButton/hooks/usePopConfirmButton'

const routerName = useFormInput('路由名称', 'routerName')

export const searchController = useHiForm([routerName], { layout: 'inline' })

export const createRouter = useHiSmallPrimaryTextButton('创建路由')
export const createButton = useHISmallTextButton('创建按钮')
export const delRouter = useDelPopConfirmButton(useHISmallTextButton('删除', { danger: true }))

export const tableController = useHiTable([
  {
    title: '路由名称',
    key: 'routerName',
    customRender: ({ record }) => {
      return record.meta.title
    }
  },
  { title: '路由Name', key: 'name' },
  { title: '路由Path', key: 'path' },
  { title: '组件名', key: 'componentName' },
  { title: '图标', key: 'icon' },
  { title: '按钮', key: 'button' },
  {
    title: '操作',
    key: 'action',
    buttonConfigList: [createRouter, createButton, delRouter],
    fixed: 'right',
    width: 250
  }
])
