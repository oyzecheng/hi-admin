import { useHiTable } from '@/components/hiTable/hooks/useHiTable'
import {
  useHiPrimaryButton,
  useHiSmallPrimaryTextButton,
  useHISmallTextButton
} from '@/components/hiButton'
import { useDelPopConfirmButton } from '@/components/hiButton/hooks/usePopConfirmButton'

export const createButton = useHiPrimaryButton('创建', { auth: 'dataDictionary.b2e7501ee7e3eebf' })
export const editButton = useHiSmallPrimaryTextButton('编辑', {
  auth: 'dataDictionary.b2e7501ee7e3eebf'
})
export const delButton = useDelPopConfirmButton(
  useHISmallTextButton('删除', { danger: true, auth: 'dataDictionary.addb37696b9cbba3' })
)

export const tableController = useHiTable([
  { title: '名称', key: 'name' },
  { title: '类型', key: 'type' },
  { title: 'Value', key: 'value' },
  { title: '操作', key: 'action', buttonConfigList: [editButton, delButton], width: 180 }
])
