import type { IFormItemBase, TFormItemType, IFormItemRule } from '@/components/hiForm/types'
import { generateKey } from '@/utils'

export class HiFormItemController<T extends IFormItemBase> {
  protected readonly config: T
  readonly key: string
  readonly model: string
  readonly controllerType: TFormItemType | undefined

  constructor(config: T, controllerType: TFormItemType) {
    this.config = config
    this.key = generateKey()
    this.controllerType = controllerType
    this.model = config.model
  }

  private changeDisabled(val: boolean) {
    if (this.config.disabled) {
      this.config.disabled.value = val
    }
  }

  private changeStatus(val?: 'error' | 'warning' | undefined) {
    if (this.config.status) {
      this.config.status.value = val
    }
  }

  private changeIsShow(val = false) {
    if (this.config.isShow) {
      this.config.isShow.value = val
    }
  }

  getDefaultRule(): IFormItemRule {
    return {
      required: true,
      type: 'string',
      trigger: 'blur',
      message: `请输入${this.config.label}`
    }
  }

  showDisabled() {
    this.changeDisabled(true)
  }

  hideDisabled() {
    this.changeDisabled(false)
  }

  showErrorStatus() {
    this.changeStatus('error')
  }

  showWarningStatus() {
    this.changeStatus('warning')
  }

  hideStatus() {
    this.changeStatus()
  }

  show() {
    this.changeIsShow(true)
  }

  hide() {
    this.changeIsShow()
  }

  getConfig() {
    return this.config
  }

  getDefaultValue() {
    return ''
  }
}
