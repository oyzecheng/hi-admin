import { useFormInput, useFormInputNumber, useFormUpload, useHiForm } from '@/components/hiForm'

const name = useFormInput('产品名称', 'name', { rules: true })
const price = useFormInputNumber('价格', 'price', { rules: { type: 'number' }, min: 0 })
const stock = useFormInputNumber('库存', 'stock', { rules: { type: 'number' }, min: 0 })
const description = useFormInput('描述', 'description', { rules: true, modalType: 'textarea' })
const cover = useFormUpload('封面', 'cover', {
  rules: { message: '请上传封面', trigger: 'change' },
  maxCount: 5,
  format: true
})

export const formController = useHiForm([name, price, stock, description, cover], {
  layoutCol: 2,
  buttonListOffset: 2
})
