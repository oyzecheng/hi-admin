import { HiFormItemController } from '@/components/hiForm/controller/hiFormItemController'
import type { IFormCheckbox, IFormItemRule } from '@/components/hiForm/types'

export class HiFormCheckboxController extends HiFormItemController<IFormCheckbox> {
  constructor(config: IFormCheckbox) {
    super(config, 'checkbox')
  }

  getDefaultRule(): IFormItemRule {
    return { ...super.getDefaultRule(), message: `请选择${this.config.label}`, trigger: 'change' }
  }

  getDefaultValue(): [] {
    return []
  }
}
