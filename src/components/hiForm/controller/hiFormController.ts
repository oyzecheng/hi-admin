import { generateKey } from '@/utils'
import type { TFormItemControllers, TFormData, TFormRules } from '@/components/hiForm/types'

export class HiFormController {
  private readonly configList: TFormItemControllers[]
  readonly key: string
  private readonly formData: TFormData
  private readonly rules: TFormRules

  constructor(configList: TFormItemControllers[], formData: TFormData) {
    this.configList = configList
    this.key = generateKey()
    this.formData = this.generateFormData(formData)
    this.rules = this.generateRules()
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
}
