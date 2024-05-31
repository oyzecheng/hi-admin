import { HiFormItemController } from '@/components/hiForm/controller/hiFormItemController'
import type { IFormItemRule, IFormUpload, IFormUploadItem } from '@/components/hiForm/types'
import { generateKey } from '@/utils'
import { nextTick } from 'vue'

export class HiFormUploadController extends HiFormItemController<IFormUpload> {
  constructor(config: IFormUpload) {
    super(config, 'upload')
  }

  setDefaultConfig() {
    super.setDefaultConfig()
    const config = this.config
    const {
      type,
      accept,
      acceptErrorMessage,
      maxSize,
      maxSizeErrorMessage,
      placeholder,
      maxCountError
    } = config
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
    config.acceptErrorMessage = acceptErrorMessage || '文件格式错误'
    config.maxCountError = maxCountError || `最多只能上传${config.maxCount}个`
  }

  getDefaultRule(): IFormItemRule {
    return {
      ...super.getDefaultRule(),
      type: 'array',
      message: `请上传${this.config.label}`,
      trigger: 'blur', // 使用blur是为了在选择完文件后不触发，而是在上传后手动触发校验
      validator(rule, value) {
        return new Promise((resolve, reject) => {
          nextTick(() => {
            if (value.length) {
              const list = value.filter((item: IFormUploadItem) => item.status === 'success')
              if (list.length) {
                resolve(value)
              } else {
                reject(new Error('请等待文件上传完成或重新上传文件'))
              }
            } else {
              reject(new Error(rule.message))
            }
          })
        })
      }
    }
  }

  getDefaultValue(): string | [] | number | undefined {
    return []
  }

  format(value: IFormUploadItem[]) {
    return value?.map((item) => item.url).join(',') || value
  }

  restoreFormat(value: any): IFormUploadItem[] {
    try {
      const arr = value.split(',')
      return arr.map((url: string) => {
        const key = generateKey()
        return { id: key, url, name: key, status: 'success' }
      })
    } catch (err) {
      return value
    }
  }
}
