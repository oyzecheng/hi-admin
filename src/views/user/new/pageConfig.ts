import { useFormInput, useFormSelect, useHiForm } from '@/components/hiForm'
import { useHiPrimaryButton } from '@/components/hiButton'
import { useFormUpload } from '@/components/hiForm/hooks/useFormUpload'
import { roleDic, statusSwitch } from '@/views/user/pageConfig'

const username = useFormInput('用户名', 'name', { rules: true })
const email = useFormInput('邮箱', 'email', { rules: { type: 'email' } })
const address = useFormInput('地址', 'address', { rules: true })
const role = useFormSelect('角色', 'role', { rules: true, children: roleDic })
const uploadAvatar = useFormUpload('', 'avatar', {
  rules: { message: '请上传照片' },
  format: true,
  type: 'avatar'
})

export const newUserForm = useHiForm(
  [uploadAvatar, username, email, role, address, statusSwitch],
  {}
)

export const newUserButton = useHiPrimaryButton('创建新用户')

export const editUserButton = useHiPrimaryButton('保存编辑')
