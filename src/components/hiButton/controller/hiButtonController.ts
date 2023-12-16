import type { IHIButton } from '@/components/hiButton/types'
import { generateKey } from '@/utils'

export class HiButtonController {
  private readonly config: IHIButton
  private readonly key: string
  click: () => void

  constructor(config: IHIButton) {
    this.config = config
    this.click = () => {}
    this.key = generateKey()
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

  onClick(callback: (buttonConfig: HiButton) => void) {
    this.click = () => callback(this)
  }

  getConfig() {
    return this.config
  }
}
