import { Table } from '@/mock/db/table.js'
import { routeData } from '@/mock/data/routeData.js'

export class RouterManage extends Table {
  constructor() {
    super('routerManage')
  }

  init(db) {
    super.init(db)
    if (!db.objectStoreNames.contains(this.tableName)) {
      this.createTable(db).then((store) => {
        const deepLoopRouteData = (list, parentId) => {
          list.forEach((item) => {
            const children = item.children
            item.children = undefined
            item.parentId = parentId
            item.createAt = new Date().getTime()
            store.add(item)
            if (children?.length) {
              deepLoopRouteData(children, item.id)
            }
          })
        }
        deepLoopRouteData(routeData)
      })
    }
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
