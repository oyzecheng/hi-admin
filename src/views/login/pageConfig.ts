import { useFormInput, useHiForm } from '@/components/hiForm'
import { useHiButton } from '@/components/hiButton'

const email = useFormInput('', 'email', { rules: { message: '请输入邮箱' }, size: 'large' })
const password = useFormInput('', 'password', {
  rules: { message: '请输入密码' },
  size: 'large',
  modalType: 'password'
})

export const loginButton = useHiButton('登陆', { block: true, type: 'primary', size: 'large' })

export const loginForm = useHiForm([email, password])
