import type { Ref } from 'vue'

export interface IHiDicOption {
  label: string
  value: THiDicValue
  disabled?: boolean
}

export type THiDicValue = string | number

export type THiDicChildren = IHiDicOption[]
