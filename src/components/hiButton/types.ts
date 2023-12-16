import type { Ref, VNode } from 'vue'

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
}

export interface IUseHiButtonConfig extends Omit<IHIButton, 'loading' | 'disabled' | 'isShow'> {
  loading?: boolean
  disabled?: boolean
  isShow?: boolean
}
