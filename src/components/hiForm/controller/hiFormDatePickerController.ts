import { HiFormItemController } from '@/components/hiForm/controller/hiFormItemController'
import type { IFormDatePicker, IFormItemRule } from '@/components/hiForm/types'

export class HiFormDatePickerController extends HiFormItemController<IFormDatePicker> {
  constructor(config: IFormDatePicker) {
    super(config, 'datePicker')
  }

  getDefaultRule(): IFormItemRule {
    return { ...super.getDefaultRule(), message: `请选择${this.config.label}`, trigger: 'change' }
  }
}
