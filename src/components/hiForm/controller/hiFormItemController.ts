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

    this.setDefaultValue()
  }

  private setDefaultValue() {
    if (this.config.allowClear == undefined) {
      this.config.allowClear = true
    }
    this.setDefaultStyle()
  }

  private setDefaultStyle() {
    const { style } = this.config
    this.config.style = {
      ...(style || {}),
      minWidth: '200px',
      width: this.setStyleWidth()
    }
  }

  private setStyleWidth() {
    const { width } = this.config
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
