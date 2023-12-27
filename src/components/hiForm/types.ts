import type { Ref } from 'vue'
import type { HiFormInputController } from '@/components/hiForm/controller/hiFormInputController'
import type { HiFormSelectController } from '@/components/hiForm/controller/hiFormSelectController'
import type { THiDicChildren } from '@/components/hiDic/types'
import type { HiDicController } from '@/components/hiDic/controller/hiDicController'
import type { FormProps } from 'ant-design-vue'

export type TFormItemControllers = HiFormInputController | HiFormSelectController

export type TFormItemType = 'input' | 'select' | 'checkbox' | 'radio'

export type TFormItemStatus = 'error' | 'warning' | undefined
type Size = 'large' | 'middle' | 'small'

export interface IHiForm extends FormProps {}

export interface IFormItemRule {
  len?: number
  max?: number
  message?: string
  min?: number
  pattern?: RegExp
  required?: boolean
  trigger?: 'blur' | 'change' | ['change', 'blur']
  type?:
    | 'string'
    | 'number'
    | 'boolean'
    | 'array'
    | 'object'
    | 'method'
    | 'regexp'
    | 'integer'
    | 'float'
    | 'date'
    | 'url'
    | 'email'
  validator?: (rule: IFormItemRule, value: any, callback: (err: Error) => void) => void
  whitespace?: boolean
}

export interface IFormItemBase {
  allowClear?: boolean
  isShow?: Ref<boolean>
  disabled?: Ref<boolean>
  bordered?: boolean
  size?: Size
  placeholder?: string
  status?: Ref<TFormItemStatus>
  label?: string
  model: string
  rules?: boolean | IFormItemRule | IFormItemRule[]
  width?: string | number
  style?: Partial<CSSStyleDeclaration>
}

export interface IFormInput extends IFormItemBase {
  type?: string
  defaultValue?: string
  showCount?: boolean
}

export interface IFormSelect extends IFormItemBase {
  showSearch?: boolean
  children?: THiDicChildren | HiDicController
  onChange?: (value: any) => void
}

export interface IFormCheckbox extends IFormItemBase {
  children?: THiDicChildren | HiDicController
  onChange?: (value: any) => void
}

export interface IFormRadio extends IFormItemBase {
  children?: THiDicChildren | HiDicController
  onChange?: (value: any) => void
}

export type TFormItem = IFormInput | IFormSelect | IFormCheckbox | IFormRadio

export type TFormData = { [k: string]: any }

export type TFormRules = { [k: string]: IFormItemRule[] | undefined }
