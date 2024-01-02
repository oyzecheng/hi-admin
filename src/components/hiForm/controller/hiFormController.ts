import { generateKey } from '@/utils'
import type {
  TFormItemControllers,
  TFormData,
  TFormRules,
  IHiForm
} from '@/components/hiForm/types'
import type { THiButtonClickCallback } from '@/components/hiButton/types'

export class HiFormController {
  private readonly configList: TFormItemControllers[]
  readonly key: string
  private readonly formData: TFormData
  private readonly rules: TFormRules
  private readonly config: IHiForm
  private formRef: any

  defaultConfirm: THiButtonClickCallback | null
  defaultCancel: THiButtonClickCallback | null

  constructor(configList: TFormItemControllers[], formData: TFormData, config: IHiForm) {
    this.configList = configList
    this.key = generateKey()
    this.formData = this.generateFormData(formData)
    this.rules = this.generateRules()
    this.config = config

    this.defaultConfirm = null
    this.defaultCancel = null
  }

  private generateRules() {
    const rules: TFormRules = {}
    this.configList.forEach((item) => {
      rules[item.model] = this.getItemRules(item)
    })

    return rules
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

  generateFormData(formData: TFormData): TFormData {
    this.configList.forEach((item) => {
      formData[item.model] = item.getDefaultValue()
    })
    return formData
  }

  getConfigList() {
    return this.configList
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
