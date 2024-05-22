import { Table } from '@/mock/db/table.js'

export class RouterManage extends Table {
  constructor(dataList) {
    super([])
    this.init(dataList)
  }

  init(dataList) {
    const deepLoopRouteData = (list, parentId) => {
      list.forEach((item) => {
        const children = item.children
        item.children = undefined
        item.parentId = parentId
        item.createAt = new Date().getTime()
        this._table.push(item)
        if (children?.length) {
          deepLoopRouteData(children, item.id)
        }
      })
    }
    deepLoopRouteData(dataList)
  }

  generateRouterTree(list) {
    const obj = {}
    list.forEach((item) => {
      obj[item.id] = item
    })
    const parentList = []
    list.forEach((item) => {
      const parent = obj[item.parentId]
      if (parent) {
        // * 当前项有父节点
        parent.children = parent.children || []
        parent.children.push(item)
        parent.children.sort((a, b) => a.sort - b.sort)
      } else {
        // * 当前项没有父节点 -> 顶层
        parentList.push(item)
      }
    })
    return parentList.sort((a, b) => a.sort - b.sort)
  }

  async getSortAll() {
    const list = await super.getAll()
    return this.generateRouterTree(list)
  }

  async getUserRouter() {
    const list = await super.getAll()
    return this.generateRouterTree(list)
  }
}
