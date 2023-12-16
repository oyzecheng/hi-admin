import { HiFormItemController } from '@/components/hiForm/controller/hiFormItemController'
import type { IFormItemRule, IFormSelect } from '@/components/hiForm/types'

export class HiFormSelectController extends HiFormItemController<IFormSelect> {
  constructor(config: IFormSelect) {
    super(config, 'select')
  }

  getDefaultRule(): IFormItemRule {
    return { ...super.getDefaultRule(), message: `请选择${this.config.label}`, trigger: 'change' }
  }
}
