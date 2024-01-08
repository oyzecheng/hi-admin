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
    this.formData = formData
    this.rules = {}
    this.config = this.setDefaultConfig(config)

    this.defaultConfirm = null
    this.defaultCancel = null

    this.init()
  }

  private init() {
    this.configList.forEach((item) => {
      this.rules[item.model] = this.getItemRules(item)
      this.formData[item.model] = item.getDefaultValue()
      item.setDefaultConfig()
    })
  }

  private setDefaultConfig(config: IHiForm): IHiForm {
    return { labelAlign: 'right', labelCol: { span: 4 }, ...config }
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
