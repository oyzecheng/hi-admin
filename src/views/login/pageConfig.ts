import { useFormInput, useHiForm } from '@/components/hiForm'
import { useHiButton } from '@/components/hiButton'

export const email = useFormInput('', 'email', {
  rules: { message: '请输入邮箱' },
  size: 'large',
  placeholder: '请输入邮箱'
})
export const password = useFormInput('', 'password', {
  rules: { message: '请输入密码' },
  size: 'large',
  modalType: 'password',
  placeholder: '请输入密码'
})

export const loginButton = useHiButton('登陆', { block: true, type: 'primary', size: 'large' })

export const loginForm = useHiForm([email, password])
