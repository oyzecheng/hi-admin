import type { VNode } from 'vue'
import type { IUseHiButtonConfig } from '@/components/hiButton/types'
import { HiButtonController } from '@/components/hiButton/controller/hiButtonController'
import { ref } from 'vue'

type TLabel = string | VNode
type TUseHiButton = (label: TLabel, config?: IUseHiButtonConfig) => HiButtonController

export const useHiButton: TUseHiButton = (label, config = {}) => {
  const loading = ref(config.loading || false)
  const disabled = ref(config.disabled || false)
  const isShow = ref(config.isShow === undefined ? true : config.isShow)
  return new HiButtonController({ label, ...config, loading, disabled, isShow })
}

export const useHiPrimaryButton: TUseHiButton = (label, config = {}) => {
  return useHiButton(label, { ...config, type: 'primary' })
}

export const useHISmallTextButton: TUseHiButton = (label, config = {}) => {
  return useHiButton(label, { ...config, type: 'text', size: 'small' })
}

export const useHiPrimaryTextButton: TUseHiButton = (label, config = {}) => {
  return useHiButton(label, { ...config, type: 'text', className: 'ant-btn-text-primary' })
}

export const useHiSmallPrimaryTextButton: TUseHiButton = (label, config = {}) => {
  return useHiPrimaryTextButton(label, { ...config, size: 'small' })
}

export const useHiSmallPrimaryGhostButton: TUseHiButton = (label, config = {}) => {
  return useHiButton(label, { ...config, size: 'small', type: 'primary', ghost: true })
}
