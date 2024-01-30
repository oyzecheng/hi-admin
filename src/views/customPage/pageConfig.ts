import { useHiButton, useHiPrimaryButton } from '@/components/hiButton'
import { useHiTable } from '@/components/hiTable/hooks/useHiTable'

export const editPageButton = useHiPrimaryButton('编辑页面')

export const tableController = useHiTable([{ title: 'a', key: 'a' }])

export const drawerFooterConfirm = useHiPrimaryButton('确定')

export const drawerFooterCancel = useHiButton('取消', { type: 'text' })
