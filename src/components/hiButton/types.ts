import type { Ref, VNode } from 'vue'
import type { HiButtonController } from '@/components/hiButton/controller/hiButtonController'
import type { HiPopConfirmButtonController } from '@/components/hiButton/controller/hiPopConfirmButtonController'

export interface IHIButton {
  label?: string | VNode
  block?: boolean
  danger?: boolean
  disabled?: Ref<boolean>
  ghost?: boolean
  href?: string
  htmlType?: string
  loading?: Ref<boolean>
  icon?: VNode
  shape?: 'default' | 'circle' | 'round'
  size?: 'large' | 'middle' | 'small'
  target?: string
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default'
  isShow?: Ref<boolean>
  className?: string
}

export interface IUseHiButtonConfig extends Omit<IHIButton, 'loading' | 'disabled' | 'isShow'> {
  loading?: boolean
  disabled?: boolean
  isShow?: boolean
}

export interface IHiPopConfirmButtonConfig {
  cancelText?: string
  disabled?: Ref<boolean>
  icon?: VNode
  okText?: string
  okType?: string
  showCancel?: boolean
  title?: string
  description?: string
}

export type THiButtonType = 'button' | 'popConfirmButton'

export type THiButtonClickCallback = (controller: HiButtonController) => void | Promise<any>

export type TButtonController = HiButtonController | HiPopConfirmButtonController
