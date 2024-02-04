import { useFormInput, useHiForm } from '@/components/hiForm'

const name = useFormInput('名称', 'name', { rules: true })
const type = useFormInput('类型', 'type', { rules: true })
const dicValue = useFormInput('Value', 'value', { rules: true })

export const newFormController = useHiForm([name, type, dicValue])
