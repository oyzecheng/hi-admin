import { HiFormItemController } from '@/components/hiForm/controller/hiFormItemController'
import type { IFormItemRule, IFormRate } from '@/components/hiForm/types'

export class HiFormRateController extends HiFormItemController<IFormRate> {
  constructor(config: IFormRate) {
    super(config, 'rate')
  }

  getDefaultRule(): IFormItemRule {
    return { ...super.getDefaultRule(), message: `请选择${this.config.label}`, trigger: 'change' }
  }
}
