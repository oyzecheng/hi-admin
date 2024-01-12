import type { IHiModal, IShowModalPrams } from '@/components/hiModal/types'

export class HiModalController {
  private readonly config: IHiModal
  ok: () => void
  cancel: () => void
  private record: any

  constructor(config: IHiModal) {
    this.config = config
    this.ok = () => this.hideModal()
    this.cancel = () => this.hideModal()
    this.record = undefined

    this.setDefaultConfig()
  }

  private setDefaultConfig() {
    const config = this.config
    const { centered } = config
    config.centered = centered == undefined ? true : centered
  }

  private changeConfirmLoading(value = false) {
    this.config.confirmLoading.value = value
  }

  private changeModalOpen(value = false) {
    this.config.open.value = value
  }

  changeTitle(title: string) {
    this.config.title.value = title
  }

  showConfirmLoading() {
    this.changeConfirmLoading(true)
  }

  hideConfirmLoading() {
    this.changeConfirmLoading()
  }

  showModal(params: IShowModalPrams = {}) {
    const { title, record } = params
    title && this.changeTitle(title)
    this.record = record
    this.changeModalOpen(true)
  }

  hideModal() {
    this.record = undefined
    this.changeConfirmLoading()
    this.changeModalOpen()
  }

  onOk(callback: (record: any) => void) {
    this.ok = () => {
      callback(this.record)
    }
  }

  onCancel(callback: () => void | boolean | Promise<boolean> = () => true) {
    this.cancel = async () => {
      const result = await callback()
      if (result == undefined || result) {
        this.hideModal()
      }
    }
  }

  getConfig() {
    return this.config
  }
}
