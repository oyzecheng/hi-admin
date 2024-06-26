import { useHiButton, useHiPrimaryButton, useHISmallTextButton } from '@/components/hiButton'
import { useHiTable } from '@/components/hiTable/hooks/useHiTable'
import { useDic } from '@/components/hiDic'
import { useFormInput, useFormSelect, useFormSwitch, useHiForm } from '@/components/hiForm'
import { useDelPopConfirmButton } from '@/components/hiButton/hooks/usePopConfirmButton'
import { h } from 'vue'
import { DeleteOutlined } from '@ant-design/icons-vue'
import { RoleManageAll } from '@/api/role'

export const newButton = useHiPrimaryButton('新建', { auth: 'userListPage.e9287ac5276d6c7f' })

export const show = useHISmallTextButton('查看', { auth: 'userListPage.a5b5b4cb83679665' })
export const edit = useHISmallTextButton('编辑', { auth: 'userListPage.e9287ac5276d6c7f' })
export const del = useDelPopConfirmButton(
  useHISmallTextButton('删除', { danger: true, auth: 'userListPage.6330e59450d8f970' })
)

export const batchDel = useHiButton('', {
  icon: h(DeleteOutlined, { style: { color: 'var(--color-error)' } }),
  type: 'text',
  danger: true,
  shape: 'circle'
})

export const statusDic = useDic([], 'USER_STATUS')

export const roleDic = useDic()
roleDic.setLoadFn(
  async () => {
    const { data } = await RoleManageAll()
    return data
  },
  'name',
  'id'
)

export const table = useHiTable(
  [
    { title: '名称', key: 'name' },
    { title: '角色', key: 'role', dic: roleDic, width: 120 },
    {
      title: '状态',
      key: 'status',
      dic: statusDic,
      width: 120
    },
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
