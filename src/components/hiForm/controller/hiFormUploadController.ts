import { HiFormItemController } from '@/components/hiForm/controller/hiFormItemController'
import type { IFormItemRule, IFormUpload } from '@/components/hiForm/types'

export class HiFormUploadController extends HiFormItemController<IFormUpload> {
  constructor(config: IFormUpload) {
    super(config, 'upload')
  }

  setDefaultConfig() {
    super.setDefaultConfig()
    const config = this.config
    const { type, accept, acceptErrorMessage, maxSize, maxSizeErrorMessage, placeholder } = config
    if (type === 'avatar') {
      config.accept = accept || '.jpg,.jpeg,.png,.gif'
      config.acceptErrorMessage = acceptErrorMessage || '文件格式错误'
      config.maxSize = maxSize || 3 * 1024
      config.maxSizeErrorMessage = maxSizeErrorMessage || '文件大小超过3Mb'
      config.placeholder = placeholder || '允许*.jpeg, *.jpg, *.png, *.gif\n最大3Mb'
    }
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
