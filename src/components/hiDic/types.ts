export interface IHiDicOption {
  label: string
  value: THiDicValue
  disabled?: boolean
  children?: IHiDicOption[]
}

export type THiDicValue = string | number

export type THiDicChildren = IHiDicOption[]

export type TLoadFn = () => Promise<any[]> | []
