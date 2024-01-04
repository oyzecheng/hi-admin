import { useFormInput, useHiForm } from '@/components/hiForm'
import { useHiPrimaryButton } from '@/components/hiButton'
import { useFormUpload } from '@/components/hiForm/hooks/useUpload'

const username = useFormInput('用户名', 'username', { rules: true })
const email = useFormInput('邮箱', 'email', { rules: true })
const address = useFormInput('地址', 'address', { rules: true })
const uploadAvatar = useFormUpload('', 'avatar', {
  rules: { message: '请上传照片' },
  type: 'avatar',
  placeholder: '允许*.jpeg, *.jpg, *.png, *.gif\n最大3Mb'
})

export const newUserForm = useHiForm([uploadAvatar, username, email, address], {
  layoutCol: 2
})

export const newUserButton = useHiPrimaryButton('创建新用户')
