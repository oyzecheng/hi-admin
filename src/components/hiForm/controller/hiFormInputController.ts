import { HiFormItemController } from '@/components/hiForm/controller/hiFormItemController'
import type { IFormInput, TFormItemType } from '@/components/hiForm/types'

export class HiFormInputController extends HiFormItemController<IFormInput> {
  constructor(config: IFormInput) {
    super(config, 'input')
  }
}
