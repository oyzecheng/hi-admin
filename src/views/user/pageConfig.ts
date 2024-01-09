import { useHiPrimaryButton, useHISmallTextButton } from '@/components/hiButton'
import { useHiTable } from '@/components/hiTable/hooks/useHiTable'
import { useDic } from '@/components/hiDic'
import { useFormInput, useFormSelect, useHiForm } from '@/components/hiForm'

export const newButton = useHiPrimaryButton('新建')

export const show = useHISmallTextButton('查看')
export const edit = useHISmallTextButton('编辑')
export const del = useHISmallTextButton('删除', { danger: true })

export const table = useHiTable(
  [
    { title: '名称', key: 'name' },
    { title: '角色', key: 'role' },
    { title: '状态', key: 'status' },
    {
      title: '操作',
      key: 'action',
      width: 200,
      buttonConfigList: [show, edit, del]
    }
  ],
  { selection: true }
)

const selectChildren = useDic([
  { label: 'test', value: 'test' },
  { label: 'test2', value: 'test2' }
])

const input = useFormInput('名称', 'input')
const select = useFormSelect('状态', 'select', {
  children: selectChildren
})
export const searchForm = useHiForm([input, select], { layout: 'inline' })
