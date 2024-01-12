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
    config.acceptErrorMessage = acceptErrorMessage || '文件格式错误'
    if (type === 'avatar') {
      config.accept = accept || '.jpg,.jpeg,.png,.gif'
      config.maxSize = maxSize || 3 * 1024
      config.maxSizeErrorMessage = maxSizeErrorMessage || '文件大小超过3Mb'
      config.placeholder = placeholder || '允许*.jpeg, *.jpg, *.png, *.gif\n最大3Mb'
      config.multiple = false
      config.maxCount = 1
    }
    if (['image', 'imageList'].includes(type)) {
      config.accept = accept || 'image/*'
      config.maxSize = maxSize || 3 * 1024
      config.maxSizeErrorMessage = maxSizeErrorMessage || '文件大小超过3Mb'
      if (type === 'image') {
        config.maxCount = 1
        config.multiple = false
      } else {
        config.multiple = true
      }
    }
    if (type === 'file') {
      config.accept = accept || ''
      config.multiple = true
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
