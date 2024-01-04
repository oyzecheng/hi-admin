import { HiFormItemController } from '@/components/hiForm/controller/hiFormItemController'
import type { IFormItemRule, IFormUpload } from '@/components/hiForm/types'

export class HiFormUploadController extends HiFormItemController<IFormUpload> {
  constructor(config: IFormUpload) {
    super(config, 'upload')
  }

  getDefaultRule(): IFormItemRule {
    return {
      ...super.getDefaultRule(),
      type: 'array',
      message: `请上传${this.config.label}`,
      trigger: 'change',
      validator(rule, value) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (value.length) {
              resolve(value)
            } else {
              reject(new Error(rule.message))
            }
          }, 10)
        })
      }
    }
  }

  getDefaultValue(): string | [] | number | undefined {
    return []
  }
}
