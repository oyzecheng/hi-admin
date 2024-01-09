import { HiFormItemController } from '@/components/hiForm/controller/hiFormItemController'
import type { IFormInputNumber } from '@/components/hiForm/types'

export class HiFormInputNumberController extends HiFormItemController<IFormInputNumber> {
  constructor(config: IFormInputNumber) {
    super(config, 'inputNumber')
  }
}
