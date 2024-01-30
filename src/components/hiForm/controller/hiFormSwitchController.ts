import { HiFormItemController } from '@/components/hiForm/controller/hiFormItemController'
import type { IFormItemRule, IFormSwitch } from '@/components/hiForm/types'

export class HiFormSwitchController extends HiFormItemController<IFormSwitch> {
  constructor(config: IFormSwitch) {
    super(config, 'switch')
  }

  getDefaultRule(): IFormItemRule {
    return { ...super.getDefaultRule(), message: `请选择${this.config.label}`, trigger: 'change' }
  }
}
