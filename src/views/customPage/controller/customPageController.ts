import { reactive, ref } from 'vue'
import type { Ref } from 'vue'
import type { ICustomButtonConfig, ICustomFormItemConfig } from '@/views/customPage/types'
import { generateKey } from '@/utils'

export class CustomPageController {
  private readonly topButtonList: ICustomButtonConfig[]
  private readonly topFilterList: ICustomFormItemConfig[]
  currentEditItem: any
  pageDrawerOpen: Ref<boolean>
  itemDrawerOpen: Ref<boolean>
  currentEditItemType: Ref<'button' | 'formItem'>

  constructor() {
    this.topButtonList = reactive([])
    this.topFilterList = reactive([])

    this.pageDrawerOpen = ref(false)
    this.itemDrawerOpen = ref(false)
    this.currentEditItem = {}
    this.currentEditItemType = ref('button')
  }

  init(data: any) {
    const { topButtonList = [], topFilterList = [] } = data
    this.topButtonList.splice(0, this.topButtonList.length)
    this.topButtonList.push(...topButtonList)

    this.topFilterList.splice(0, this.topFilterList.length)
    this.topFilterList.push(...topFilterList)
  }

  private addButton(buttonList: ICustomButtonConfig[]) {
    const defaultButtonConfig: ICustomButtonConfig = {
      key: generateKey(),
      label: '新按钮',
      type: 'default',
      size: 'middle',
      shape: 'default',
      danger: false
    }
    buttonList.push({ ...defaultButtonConfig })
  }

  private addFormItem(list: ICustomFormItemConfig[]) {
    const defaultFormItemConfig: ICustomFormItemConfig = {
      type: 'input',
      key: generateKey(),
      label: 'label'
    }
    list.push(defaultFormItemConfig)
  }

  private changePageDrawerOpen(value = false) {
    this.pageDrawerOpen.value = value
  }

  private changeItemDrawerOpen(value = false) {
    this.itemDrawerOpen.value = value
  }

  private removeItemByKey(key: string, list: ICustomFormItemConfig[] | ICustomButtonConfig[]) {
    const index = list.findIndex((item) => item.key === key)
    if (index !== -1) {
      list.splice(index, 1)
    }
  }

  addTopButton() {
    this.addButton(this.topButtonList)
  }

  getPageConfig() {
    return { topButtonList: this.topButtonList, topFilterList: this.topFilterList }
  }

  removeTopButtonItem(key: string) {
    this.removeItemByKey(key, this.topButtonList)
  }

  addTopFilterItem() {
    this.addFormItem(this.topFilterList)
  }

  removeTopFilterItem(key: string) {
    this.removeItemByKey(key, this.topFilterList)
  }

  openPageDrawer() {
    this.changePageDrawerOpen(true)
  }

  closePageDrawer() {
    this.changePageDrawerOpen()
  }

  openButtonItemDrawer() {
    this.changeItemDrawerOpen(true)
    this.currentEditItemType.value = 'button'
  }

  openFormItemDrawer() {
    this.changeItemDrawerOpen(true)
    this.currentEditItemType.value = 'formItem'
  }

  closeItemDrawer() {
    this.changeItemDrawerOpen()
  }

  setCurrentEditItem(item: any) {
    this.currentEditItem = item
  }
}
