import { generateKey } from '@/utils'
import type {
  TFormItemControllers,
  TFormData,
  TFormRules,
  IHiForm,
  TFormConfigList
} from '@/components/hiForm/types'
import type { THiButtonClickCallback } from '@/components/hiButton/types'

export class HiFormController {
  private readonly configList: TFormConfigList
  readonly key: string
  private readonly formData: TFormData
  private readonly rules: TFormRules
  private readonly config: IHiForm
  private formRef: any

  defaultConfirm: THiButtonClickCallback | null
  defaultCancel: THiButtonClickCallback | null

  constructor(configList: TFormConfigList, formData: TFormData, config: IHiForm) {
    this.configList = configList
    this.key = generateKey()
    this.formData = formData
    this.rules = {}
    this.config = this.setDefaultConfig(config)

    this.defaultConfirm = null
    this.defaultCancel = null

    this.init(this.configList)
  }

  private init(list: TFormConfigList) {
    list.forEach((item) => {
      if (item instanceof Array) {
        this.init(item)
      } else {
        this.rules[item.model] = this.getItemRules(item)
        this.formData[item.model] = item.getDefaultValue()
        item.setDefaultConfig()
      }
    })
  }

  private setDefaultConfig(config: IHiForm): IHiForm {
    const { layout, layoutCol = 0 } = config
    return {
      labelAlign: layout === 'inline' ? undefined : 'right',
      labelCol: layout === 'inline' ? undefined : { span: 4 + layoutCol },
      ...config
    }
  }

  private getItemRules(itemController: TFormItemControllers) {
    const config = itemController.getConfig()
    const { rules } = config
    if (rules) {
      if (typeof rules === 'boolean') {
        return [itemController.getDefaultRule()]
      } else if (Object.prototype.toString.call(rules) === '[object Object]') {
        return [{ ...itemController.getDefaultRule(), ...(config.rules as object) }]
      }
    }
  }

  setFormRef(formRef: any) {
    this.formRef = formRef
  }

  getConfigList(): TFormConfigList {
    const { layoutCol } = this.config
    if (layoutCol) {
      const result = []
      let tempList = []
      for (let i = 0; i < this.configList.length; i += 1) {
        const item = this.configList[i]
        if (Array.isArray(item)) {
          result.push(item)
        } else {
          tempList.push(item)
        }
        if (tempList.length >= layoutCol) {
          result.push([...tempList])
          tempList = []
        }
      }
      return result
    } else {
      return this.configList
    }
  }

  getFormData() {
    return this.formData
  }

  getRules() {
    return this.rules
  }

  getConfig() {
    return this.config
  }

  validate() {
    return new Promise((resolve, reject) => {
      this.formRef
        ?.validate()
        .then((res: any) => {
          const { outOfDate } = res
          if ('outOfDate' in res && !outOfDate) {
            reject(res)
          } else {
            resolve(res)
          }
        })
        .catch((err: any) => {
          reject(err)
        })
    })
  }

  resetFields() {
    this.formRef?.resetFields()
  }

  validateFields(nameList: string[]) {
    this.formRef?.validateFields(nameList)
  }

  scrollToField(name: string) {
    this.formRef?.scrollToField(name)
  }

  onDefaultConfirm(callback: THiButtonClickCallback) {
    this.defaultConfirm = callback
  }

  onDefaultCancel(callback: THiButtonClickCallback) {
    this.defaultCancel = callback
  }
}
