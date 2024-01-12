import type { Ref, VNode } from 'vue'

export interface IHiModal {
  confirmLoading: Ref<boolean>
  title: Ref<string>
  open: Ref<boolean>
  cancelText?: string | VNode
  centered?: boolean
  closable?: boolean
  closeIcon?: VNode
  destroyOnClose?: boolean
  footer?: string | null
  keyboard?: boolean
  mask?: boolean
  maskClosable?: boolean
  okText?: string | VNode
  okType?: string
  width?: number
  zIndex?: number
}

export interface IShowModalPrams {
  title?: string
  record?: any
}
