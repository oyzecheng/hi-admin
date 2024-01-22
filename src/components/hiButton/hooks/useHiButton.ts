import type { VNode } from 'vue'
import type { IUseHiButtonConfig } from '@/components/hiButton/types'
import { HiButtonController } from '@/components/hiButton/controller/hiButtonController'
import { ref } from 'vue'

type TLabel = string | VNode

export const useHiButton = (label: TLabel, config: IUseHiButtonConfig = {}) => {
  const loading = ref(config.loading || false)
  const disabled = ref(config.disabled || false)
  const isShow = ref(config.isShow === undefined ? true : config.isShow)
  return new HiButtonController({ label, ...config, loading, disabled, isShow })
}

export const useHiPrimaryButton = (label: TLabel, config: IUseHiButtonConfig = {}) => {
  return useHiButton(label, { ...config, type: 'primary' })
}

export const useHISmallTextButton = (label: TLabel, config: IUseHiButtonConfig = {}) => {
  return useHiButton(label, { ...config, type: 'text', size: 'small' })
}

export const useHiPrimaryTextButton = (label: TLabel, config: IUseHiButtonConfig = {}) => {
  return useHiButton(label, { ...config, type: 'text', className: 'ant-btn-text-primary' })
}

export const useHiSmallPrimaryTextButton = (label: TLabel, config: IUseHiButtonConfig = {}) => {
  return useHiPrimaryTextButton(label, { ...config, size: 'small' })
}
