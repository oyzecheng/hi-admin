import { useHiTable } from '@/components/hiTable/hooks/useHiTable'
import { useHiPrimaryButton, useHISmallTextButton } from '@/components/hiButton'
import { useDelPopConfirmButton } from '@/components/hiButton/hooks/usePopConfirmButton'

export const delRole = useDelPopConfirmButton(
  useHISmallTextButton('删除', { danger: true, auth: 'roleManage.beabc395a59d6973' })
)
export const editRole = useHISmallTextButton('编辑', { auth: 'roleManage.8ecf5acf12743a3c' })
export const topCreateRole = useHiPrimaryButton('创建角色', { auth: 'roleManage.8ecf5acf12743a3c' })

export const tableController = useHiTable(
  [
    { title: '角色名称', key: 'name' },
    { title: '描述', key: 'description' },
    { title: '启用/禁用', key: 'status' },
    {
      title: '操作',
      key: 'action',
      buttonConfigList: [editRole, delRole],
      fixed: 'right',
      width: 150
    }
  ],
  { pagination: false }
)
