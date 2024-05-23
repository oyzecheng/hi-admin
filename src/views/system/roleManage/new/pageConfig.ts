import { useFormInput, useFormSwitch } from '@/components/hiForm'
import { useHiForm } from '@/components/hiForm'

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

export const newFormController = useHiForm([roleName, roleDescription, roleStatus], {
  layoutCol: 2,
  buttonListOffset: 2
})
