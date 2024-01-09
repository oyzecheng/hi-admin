import { HiFormItemController } from '@/components/hiForm/controller/hiFormItemController'
import type { IFormCascader, IFormItemRule } from '@/components/hiForm/types'

export class HiFormCascaderController extends HiFormItemController<IFormCascader> {
  constructor(config: IFormCascader) {
    super(config, 'cascader')
  }

  getDefaultRule(): IFormItemRule {
    return { ...super.getDefaultRule(), message: `请选择${this.config.label}`, trigger: 'change' }
  }
}
