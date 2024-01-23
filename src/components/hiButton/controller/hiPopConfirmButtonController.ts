import { HiButtonController } from '@/components/hiButton/controller/hiButtonController'
import type {
  IHiPopConfirmButtonConfig,
  THiButtonClickCallback,
  THiButtonType
} from '@/components/hiButton/types'

export class HiPopConfirmButtonController extends HiButtonController {
  private readonly popConfirmConfig: IHiPopConfirmButtonConfig
  readonly buttonController: HiButtonController
  readonly type: THiButtonType
  confirm: THiButtonClickCallback
  cancel: THiButtonClickCallback

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

  onConfirm(callback: THiButtonClickCallback) {
    this.confirm = () => callback(this.buttonController)
  }

  onCancel(callback: THiButtonClickCallback) {
    this.cancel = () => callback(this.buttonController)
  }
}
