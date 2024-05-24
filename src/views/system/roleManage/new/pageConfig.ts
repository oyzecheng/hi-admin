import { useFormInput, useFormSwitch } from '@/components/hiForm'
import { useHiForm } from '@/components/hiForm'
import { useFormSlot } from '@/components/hiForm/hooks/useFormSlot'

const roleName = useFormInput('角色名称', 'name', { rules: true })
const roleDescription = useFormInput('角色描述', 'description', {
  rules: true,
  modalType: 'textarea'
})
const roleStatus = useFormSwitch('角色状态', 'status', {
  defaultValue: 1,
  unCheckedValue: 2,
  checkedValue: 1,
  checkedChildren: '启用',
  unCheckedChildren: '禁用'
})
const roleAuth = useFormSlot('权限', 'auth')
const empty = useFormSlot('', 'empty')

export const newFormController = useHiForm(
  [roleName, roleDescription, roleStatus, empty, roleAuth],
  {
    layoutCol: 2,
    buttonListOffset: 2
  }
)
