import { useHiButton, useHiPrimaryButton, useHISmallTextButton } from '@/components/hiButton'
import { useHiTable } from '@/components/hiTable/hooks/useHiTable'
import { useDic } from '@/components/hiDic'
import { useFormInput, useFormSelect, useFormSwitch, useHiForm } from '@/components/hiForm'
import { useDelPopConfirmButton } from '@/components/hiButton/hooks/usePopConfirmButton'
import { h } from 'vue'
import { DeleteOutlined } from '@ant-design/icons-vue'

export const newButton = useHiPrimaryButton('新建')

export const show = useHISmallTextButton('查看')
export const edit = useHISmallTextButton('编辑')
export const del = useDelPopConfirmButton(useHISmallTextButton('删除', { danger: true }))

export const batchDel = useHiButton('', {
  icon: h(DeleteOutlined, { style: { color: 'var(--color-error)' } }),
  type: 'text',
  danger: true,
  shape: 'circle'
})

const statusDic = useDic([
  { label: '启用', value: 1 },
  { label: '禁用', value: 2 }
])

export const roleDic = useDic([
  { label: '管理员', value: 1 },
  { label: '普通员工', value: 2 }
])

export const table = useHiTable(
  [
    { title: '名称', key: 'name' },
    { title: '角色', key: 'role', dic: roleDic, width: 120 },
    { title: '状态', key: 'status', dic: statusDic, width: 120 },
    { title: '地址', key: 'address' },
    {
      title: '操作',
      key: 'action',
      width: 200,
      buttonConfigList: [show, edit, del]
    }
  ],
  { selection: true }
)

const input = useFormInput('名称', 'name')
const select = useFormSelect('状态', 'status', {
  children: statusDic
})
export const searchForm = useHiForm([input, select], { layout: 'inline' })

export const statusSwitch = useFormSwitch('状态', 'status', {
  checkedChildren: '启用',
  unCheckedChildren: '禁用',
  checkedValue: 1,
  unCheckedValue: 2
})
