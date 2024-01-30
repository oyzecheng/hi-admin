import type { IHiDicOption, THiDicChildren, THiDicValue, TLoadFn } from '@/components/hiDic/types'

export class HiDicController {
  private readonly children: THiDicChildren
  private loadFn?: TLoadFn

  constructor(children: THiDicChildren) {
    this.children = children
    this.loadFn = undefined
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

  private deepLoopList(list: any[], formatLabelKey: string, formatValueKey: string) {
    list.forEach((item) => {
      if (formatLabelKey) item.label = item[formatLabelKey]
      if (formatValueKey) item.value = item[formatValueKey]
      if (item.children) {
        this.deepLoopList(item.children, formatLabelKey, formatValueKey)
      }
    })
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

  setLoadFn(loadFn: TLoadFn, formatLabelKey?: string, formatValueKey?: string) {
    this.loadFn = async () => {
      const result = await loadFn()
      if (formatLabelKey || formatValueKey) {
        this.deepLoopList(result, formatLabelKey || '', formatValueKey || '')
      }
      this.clearChildren()
      this.children.push(...result)
      return result
    }
    this.runLoadFn()
  }

  runLoadFn() {
    this.loadFn?.()
  }
}
