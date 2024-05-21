import { useDic } from '@/components/hiDic'
import {
  useFormInput,
  useFormSelect,
  useHiForm,
  useFormCheckbox,
  useFormRadio,
  useFormSwitch,
  useFormUpload,
  useFormInputNumber,
  useFormRate,
  useFormCascader,
  useFormDatePicker,
  useFormDateRangePicker
} from '@/components/hiForm'

const selectChildren = useDic([
  { label: 'test', value: 'test' },
  { label: 'test2', value: 'test2' }
])

const cascaderChilcren = useDic([
  {
    label: '北京',
    value: '1',
    children: [
      { label: '东城区', value: '11' },
      { label: '西城区', value: '12' }
    ]
  },
  {
    label: '湖南',
    value: '2',
    children: [
      { label: '长沙', value: '21' },
      { label: '株洲', value: '22' }
    ]
  }
])

const input = useFormInput('input', 'input', { size: 'large', disabled: false, rules: true })
const select = useFormSelect('select', 'select', {
  children: selectChildren,
  rules: { message: '自定义提示' },
  onChange: (value) => {
    console.log('select change', value)
  }
})
const checkbox = useFormCheckbox('checkbox', 'checkbox', { children: selectChildren })
const radio = useFormRadio('radio', 'radio', { children: selectChildren })
const upload = useFormUpload('upload', 'upload', { type: 'file', maxCount: 3 })
const formSwitch = useFormSwitch('switch', 'switch')
const inputNumber = useFormInputNumber('inputNumber', 'inputNumber')
const rate = useFormRate('rate', 'rate', { allowHalf: true })
const cascader = useFormCascader('cascader', 'cascader', { children: cascaderChilcren })
const datePicker = useFormDatePicker('datePicker', 'datePicker')
const dateRangePicker = useFormDateRangePicker('dateRangePicker', 'dateRangePicker')

export const form = useHiForm([
  input,
  select,
  checkbox,
  radio,
  upload,
  formSwitch,
  inputNumber,
  rate,
  cascader,
  datePicker,
  dateRangePicker
])
