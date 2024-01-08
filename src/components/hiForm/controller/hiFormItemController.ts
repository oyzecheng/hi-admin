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

  private setDefaultStyle(config: T) {
    const { style } = config
    config.style = {
      ...(style || {}),
      minWidth: '150px',
      width: this.setStyleWidth(config)
    }
  }

  private setStyleWidth(config: T) {
    const { width } = config
    return width ? (typeof width === 'number' ? `${width}px` : width) : ''
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

  setDefaultConfig() {
    const config = this.config
    if (config.allowClear == undefined) {
      config.allowClear = true
    }
    this.setDefaultStyle(config)
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

  getConfigItemByKey(key: keyof T) {
    return this.config[key]
  }

  setConfigItemByKey(key: keyof T, value: any) {
    this.config[key] = value
  }

  getDefaultValue(): string | undefined | [] | number {
    return ''
  }
}
