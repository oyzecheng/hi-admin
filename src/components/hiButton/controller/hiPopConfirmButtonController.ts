import { HiButtonController } from '@/components/hiButton/controller/hiButtonController'
import type { IHiPopConfirmButtonConfig, THiButtonType } from '@/components/hiButton/types'

export class HiPopConfirmButtonController extends HiButtonController {
  private readonly popConfirmConfig: IHiPopConfirmButtonConfig
  readonly buttonController: HiButtonController
  readonly type: THiButtonType
  confirm: () => void
  cancel: () => void

  constructor(buttonController: HiButtonController, config: IHiPopConfirmButtonConfig) {
    super(buttonController.getConfig())
    this.buttonController = buttonController
    this.popConfirmConfig = config
    this.type = 'popConfirmButton'
    this.confirm = () => {}
    this.cancel = () => {}
  }

  private changePopConfirmDisabled(val = false) {
    if (this.popConfirmConfig.disabled) {
      this.popConfirmConfig.disabled.value = val
    }
  }

  showPopConfirmDisabled() {
    this.changePopConfirmDisabled(true)
  }

  hidePopConfirmDisabled() {
    this.changePopConfirmDisabled()
  }

  getPopConfirmConfig() {
    return this.popConfirmConfig
  }

  onConfirm(callback: () => void | Promise<any>) {
    this.confirm = callback
  }

  onCancel(callback: () => void | Promise<any>) {
    this.cancel = callback
  }
}
