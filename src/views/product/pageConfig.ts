import { useHiTable } from '@/components/hiTable/hooks/useHiTable'
import {
  useHiPrimaryButton,
  useHiSmallPrimaryTextButton,
  useHISmallTextButton
} from '@/components/hiButton'
import { useDelPopConfirmButton } from '@/components/hiButton/hooks/usePopConfirmButton'
import { useFormInput, useHiForm } from '@/components/hiForm'

const name = useFormInput('产品名称', 'name')
export const searchForm = useHiForm([name], { layout: 'inline', labelCol: { span: 6 } })

export const add = useHiPrimaryButton('新建', { auth: 'productList.4ba33a94a7a13e09' })
export const edit = useHiSmallPrimaryTextButton('编辑', { auth: 'productList.4ba33a94a7a13e09' })
export const del = useDelPopConfirmButton(
  useHISmallTextButton('删除', { danger: true, auth: 'productList.d15601472b4a56fd' })
)

export const table = useHiTable([
  { title: '封面', key: 'cover', width: 100 },
  { title: '产品名称', key: 'name' },
  { title: '价格', key: 'price', width: 80 },
  { title: '库存', key: 'stock', width: 80 },
  { title: '描述', key: 'description' },
  { title: '操作', key: 'action', buttonConfigList: [edit, del], width: 130 }
])
