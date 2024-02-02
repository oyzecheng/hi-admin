import type { IHIButton } from '@/components/hiButton/types'
import type { TFormItemType } from '@/components/hiForm/types'

export interface ICustomButtonConfig extends IHIButton {
  key: string
}

export interface ICustomFormItemConfig {
  key: string
  type: TFormItemType
  label?: string
  model: string
}
