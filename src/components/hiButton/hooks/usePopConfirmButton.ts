import type { IHiPopConfirmButtonConfig } from '@/components/hiButton/types'
import { h, ref } from 'vue'
import { HiPopConfirmButtonController } from '@/components/hiButton/controller/hiPopConfirmButtonController'
import type { HiButtonController } from '@/components/hiButton/controller/hiButtonController'
import { QuestionCircleOutlined } from '@ant-design/icons-vue'

export const usePopConfirmButton = (
  buttonController: HiButtonController,
  config: Omit<IHiPopConfirmButtonConfig, 'buttonController'> = {}
) => {
  const disabled = ref(config.disabled || false)
  return new HiPopConfirmButtonController(buttonController, { ...config, disabled })
}

export const useDelPopConfirmButton = (
  buttonController: HiButtonController,
  config: Omit<IHiPopConfirmButtonConfig, 'buttonController'> = {}
) => {
  return usePopConfirmButton(buttonController, {
    title: '确定要删除该数据吗？',
    icon: h(QuestionCircleOutlined, { style: { color: 'var(--color-error)' } }),
    ...config
  })
}
