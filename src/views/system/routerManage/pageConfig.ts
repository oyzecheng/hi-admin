import { useHiTable } from '@/components/hiTable/hooks/useHiTable'
import { useFormInput, useHiForm } from '@/components/hiForm'

const routerName = useFormInput('路由名称', 'routerName')

export const searchController = useHiForm([routerName], { layout: 'inline' })

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
  { title: '按钮', key: 'button' }
])
