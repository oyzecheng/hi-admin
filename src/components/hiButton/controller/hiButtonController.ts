import type { IHIButton, THiButtonClickCallback } from '@/components/hiButton/types'
import { generateKey } from '@/utils'

export class HiButtonController {
  private readonly config: IHIButton
  readonly key: string
  click: () => void
  clickParams: { [k: string]: any }

  constructor(config: IHIButton) {
    this.config = config
    this.click = () => {}
    this.key = generateKey()
    this.clickParams = {}
  }

  private changeLoading(val: boolean) {
    if (this.config.loading) {
      this.config.loading.value = val
    }
  }

  private changeDisabled(val: boolean) {
    if (this.config.disabled) {
      this.config.disabled.value = val
    }
  }

  private changeIsShow(val: boolean) {
    if (this.config.isShow) {
      this.config.isShow.value = val
    }
  }

  setClickParams(params: { [k: string]: any } = {}) {
    this.clickParams = { ...this.clickParams, ...params }
  }

  showLoading() {
    this.changeLoading(true)
  }

  hideLoading() {
    this.changeLoading(false)
  }

  showDisabled() {
    this.changeDisabled(true)
  }

  hideDisabled() {
    this.changeDisabled(false)
  }

  showButton() {
    this.changeIsShow(true)
  }

  hideButton() {
    this.changeIsShow(false)
  }

  onClick(callback: THiButtonClickCallback) {
    this.click = () => callback(this)
  }

  getConfig() {
    return this.config
  }
}
