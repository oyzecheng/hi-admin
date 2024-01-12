import type { IHiModal } from '@/components/hiModal/types'
import { HiModalController } from '@/components/hiModal/controller/hiModalController'
import { ref } from 'vue'

interface IUseHIModalConfig extends Omit<IHiModal, 'title' | 'confirmLoading' | 'open'> {
  title?: string
  confirmLoading?: boolean
}

export const useHIModal = (config: IUseHIModalConfig) => {
  const title = ref(config.title || '')
  const confirmLoading = ref(config.confirmLoading || false)
  const open = ref(false)
  const modalConfig: IHiModal = { ...config, title, confirmLoading, open }
  return new HiModalController(modalConfig)
}
