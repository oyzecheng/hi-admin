import { HiFormItemController } from '@/components/hiForm/controller/hiFormItemController'
import type { IFormDateRangePicker, IFormItemRule } from '@/components/hiForm/types'

export class HiFormDateRangePickerController extends HiFormItemController<IFormDateRangePicker> {
  constructor(config: IFormDateRangePicker) {
    super(config, 'dateRangePicker')
  }

  getDefaultRule(): IFormItemRule {
    return { ...super.getDefaultRule(), message: `请选择${this.config.label}`, trigger: 'change' }
  }
}
