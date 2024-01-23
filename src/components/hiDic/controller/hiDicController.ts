import type { IHiDicOption, THiDicChildren, THiDicValue } from '@/components/hiDic/types'

export class HiDicController {
  private readonly children: THiDicChildren

  constructor(children: THiDicChildren) {
    this.children = children
  }

  addOption(option: IHiDicOption) {
    this.children?.push(option)
  }

  private changeOptionDisabled(value: THiDicValue, disabled = false) {
    const option = this.findOptionByValue(value)
    if (option) {
      option.disabled = disabled
    }
  }

  showOptionDisabled(value: THiDicValue) {
    this.changeOptionDisabled(value, true)
  }

  hideOptionDisabled(value: THiDicValue) {
    this.changeOptionDisabled(value, false)
  }

  private findOptionByValue(value: THiDicValue) {
    return this.children.find((item) => item.value === value)
  }

  getChildren() {
    return this.children
  }

  clearChildren() {
    this.children.splice(0, this.children.length)
  }

  getLabelByValue(value: THiDicValue) {
    const item = this.findOptionByValue(value)
    return item?.label
  }
}
