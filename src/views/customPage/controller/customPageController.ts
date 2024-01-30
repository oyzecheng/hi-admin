import { reactive, ref } from 'vue'
import type { Ref } from 'vue'
import type { ICustomButtonConfig } from '@/views/customPage/types'
import { generateKey } from '@/utils'

export class CustomPageController {
  private readonly topButtonList: ICustomButtonConfig[]
  currentEditItem: any
  pageDrawerOpen: Ref<boolean>
  itemDrawerOpen: Ref<boolean>

  constructor() {
    this.topButtonList = reactive([])
    this.pageDrawerOpen = ref(false)
    this.itemDrawerOpen = ref(false)
    this.currentEditItem = {}
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

  private changePageDrawerOpen(value = false) {
    this.pageDrawerOpen.value = value
  }

  private changeItemDrawerOpen(value = false) {
    this.itemDrawerOpen.value = value
  }

  addTopButton() {
    this.addButton(this.topButtonList)
  }

  getTopButtonList() {
    return this.topButtonList
  }

  removeTopButton(key: string) {
    const index = this.topButtonList.findIndex((item) => item.key === key)
    if (index !== -1) {
      this.topButtonList.splice(index, 1)
    }
  }

  openPageDrawer() {
    this.changePageDrawerOpen(true)
  }

  closePageDrawer() {
    this.changePageDrawerOpen()
  }

  openItemDrawer() {
    this.changeItemDrawerOpen(true)
  }

  closeItemDrawer() {
    this.changeItemDrawerOpen()
  }

  setCurrentEditItem(item: any) {
    this.currentEditItem = item
  }
}
