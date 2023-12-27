import { HiFormItemController } from '@/components/hiForm/controller/hiFormItemController'
import type { IFormItemRule, IFormRadio } from '@/components/hiForm/types'

export class HiFormRadioController extends HiFormItemController<IFormRadio> {
  constructor(config: IFormRadio) {
    super(config, 'radio')
  }

  getDefaultRule(): IFormItemRule {
    return { ...super.getDefaultRule(), message: `请选择${this.config.label}`, trigger: 'change' }
  }
}
