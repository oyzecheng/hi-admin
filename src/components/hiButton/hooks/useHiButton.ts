import type { VNode } from 'vue'
import type { IUseHiButtonConfig } from '@/components/hiButton/types'
import { HiButtonController } from '@/components/hiButton/controller/hiButtonController'
import { ref } from 'vue'

export const useHiButton = (label: string | VNode, config: IUseHiButtonConfig = {}) => {
  const loading = ref(config.loading || false)
  const disabled = ref(config.disabled || false)
  const isShow = ref(config.isShow || true)
  return new HiButtonController({ label, ...config, loading, disabled, isShow })
}
