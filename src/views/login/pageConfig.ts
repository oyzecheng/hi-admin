import { useFormInput, useHiForm } from '@/components/hiForm'
import { useHiButton } from '@/components/hiButton'

const email = useFormInput('', 'email', { rules: true, size: 'large' })
const password = useFormInput('', 'password', { rules: true, size: 'large', modalType: 'password' })

export const loginButton = useHiButton('登陆', { block: true, type: 'primary', size: 'large' })

export const loginForm = useHiForm([email, password])
