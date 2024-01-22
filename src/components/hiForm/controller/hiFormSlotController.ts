import { HiFormItemController } from '@/components/hiForm/controller/hiFormItemController'
import type { IFormSlot } from '@/components/hiForm/types'

export class HiFormSlotController extends HiFormItemController<IFormSlot> {
  constructor(config: IFormSlot) {
    super(config, 'slot')
  }
}
