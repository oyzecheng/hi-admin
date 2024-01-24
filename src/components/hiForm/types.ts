import type { Ref, VNode } from 'vue'
import type { HiFormInputController } from '@/components/hiForm/controller/hiFormInputController'
import type { HiFormSelectController } from '@/components/hiForm/controller/hiFormSelectController'
import type { THiDicChildren } from '@/components/hiDic/types'
import type { HiDicController } from '@/components/hiDic/controller/hiDicController'
import type {
  CascaderProps,
  DatePickerProps,
  FormItemProps,
  FormProps,
  RowProps
} from 'ant-design-vue'
import type { HiFormUploadController } from '@/components/hiForm/controller/hiFormUploadController'
import type { HiFormRadioController } from '@/components/hiForm/controller/hiFormRadioController'
import type { HiFormCheckboxController } from '@/components/hiForm/controller/hiFormCheckboxController'
import type { HiFormSwitchController } from '@/components/hiForm/controller/hiFormSwitchController'
import type { HiFormInputNumberController } from '@/components/hiForm/controller/hiFormInputNumberController'
import type { HiFormCascaderController } from '@/components/hiForm/controller/hiFormCascaderController'
import type { HiFormRateController } from '@/components/hiForm/controller/hiFormRateController'
import type { RangePickerProps } from 'ant-design-vue/es/vc-picker'
import type { HiFormDatePickerController } from '@/components/hiForm/controller/hiFormDatePickerController'
import type { HiFormDateRangePickerController } from '@/components/hiForm/controller/hiFormDateRangePickerController'
import type { HiFormSlotController } from '@/components/hiForm/controller/hiFormSlotController'

export type TFormItemControllers =
  | HiFormInputController
  | HiFormSelectController
  | HiFormUploadController
  | HiFormRadioController
  | HiFormCheckboxController
  | HiFormSwitchController
  | HiFormInputNumberController
  | HiFormCascaderController
  | HiFormRateController
  | HiFormDatePickerController
  | HiFormDateRangePickerController
  | HiFormSlotController

export type TFormConfigList = Array<TFormItemControllers | TFormItemControllers[]>

export type TFormItemType =
  | 'input'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'upload'
  | 'switch'
  | 'inputNumber'
  | 'rate'
  | 'cascader'
  | 'datePicker'
  | 'dateRangePicker'
  | 'slot'

export type TFormItemStatus = 'error' | 'warning' | undefined
type Size = 'large' | 'middle' | 'small'

export interface IHiForm extends FormProps {
  layoutCol?: number
}

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
  onChange?: (value: any) => void
  autofocus?: boolean
  // form item
  colon?: boolean
  extra?: string | VNode
  labelAlign?: 'left' | 'right'
  labelCol?: FormItemProps['labelCol']
  wrapperCol?: FormItemProps['wrapperCol']
  tooltip?: string | VNode
  // row col
  colSpan?: number
  rowGutter?: RowProps['gutter']
}

export interface IFormInput extends IFormItemBase {
  type?: string
  modalType?: 'password' | 'input' | 'textarea'
  defaultValue?: string
  showCount?: boolean
}

export interface IFormSelect extends IFormItemBase {
  showSearch?: boolean
  children?: THiDicChildren | HiDicController
}

export interface IFormCheckbox extends IFormItemBase {
  children?: THiDicChildren | HiDicController
}

export interface IFormRadio extends IFormItemBase {
  children?: THiDicChildren | HiDicController
}

export interface IFormSwitch extends IFormItemBase {
  checkedValue?: boolean | string | number
  unCheckedValue?: boolean | string | number
  checkedChildren?: string | VNode
  unCheckedChildren?: string | VNode
  loading?: boolean
}

export interface IFormUpload extends IFormItemBase {
  accept?: string
  acceptErrorMessage?: string
  maxCount?: number
  maxCountError?: string
  multiple?: boolean
  maxSize?: number // kb
  maxSizeErrorMessage?: string
  uploadText?: string
  type: 'avatar' | 'image' | 'imageList' | 'file'
  format?: boolean
}

export interface IFormInputNumber extends IFormItemBase {
  controls?: boolean
  decimalSeparator?: string
  formatter?: (value: number | string, info: { userTyping: boolean; input: string }) => string
  parser?: (value: string) => number
  keyboard?: boolean
  max?: number
  min?: number
  precision?: number
  prefix?: VNode
  step?: string | number
  stringMode?: boolean
  addonAfter?: VNode
  addonBefore?: VNode
}

export interface IFormRate extends IFormItemBase {
  allowHalf?: boolean
  character?: string | VNode
  count?: number
  tooltips?: string[]
}

export interface IFormCascader extends IFormItemBase {
  changeOnSelect?: boolean
  displayRender?: CascaderProps['displayRender']
  expandTrigger?: 'click' | 'hover'
  fieldNames?: CascaderProps['fieldNames']
  loadData?: CascaderProps['loadData']
  maxTagCount?: CascaderProps['maxTagCount']
  maxTagPlaceholder?: CascaderProps['maxTagPlaceholder']
  multiple?: boolean
  notFoundContent?: string | VNode
  open?: boolean
  children?: THiDicChildren | HiDicController
  showCheckedStrategy?: CascaderProps['showCheckedStrategy']
  showSearch?: CascaderProps['showSearch']
  searchValue?: string
  suffixIcon?: CascaderProps['suffixIcon']
}

export interface IFormDate extends IFormItemBase {
  disabledDate?: DatePickerProps['disabledDate']
  format?: DatePickerProps['format']
  inputReadOnly?: boolean
  mode?: DatePickerProps['mode']
  open?: boolean
  picker?: DatePickerProps['picker']
  presets?: DatePickerProps['presets']
}

export interface IFormDatePicker extends IFormDate {
  disabledTime?: (date: any) => boolean
  format?: DatePickerProps['format']
  showNow?: boolean
  showTime?: DatePickerProps['showTime']
  showToday?: boolean
}

export interface IFormDateRangePicker extends IFormDate {
  allowEmpty?: [boolean, boolean]
  disabledTime?: RangePickerProps<any>['disabledTime']
  format?: RangePickerProps<any>['format']
  ranges?: RangePickerProps<any>['ranges']
  separator?: RangePickerProps<any>['separator']
  showTime?: boolean
}

export interface IFormSlot extends IFormDate {}

export type TFormItem =
  | IFormInput
  | IFormSelect
  | IFormCheckbox
  | IFormRadio
  | IFormUpload
  | IFormSwitch
  | IFormInputNumber
  | IFormRate
  | IFormCascader
  | IFormDatePicker
  | IFormDateRangePicker
  | IFormSlot

export type TFormData = { [k: string]: any }

export type TFormRules = { [k: string]: IFormItemRule[] | undefined }

export interface IFormUploadItem {
  id: string
  url: string
  name: string
}
