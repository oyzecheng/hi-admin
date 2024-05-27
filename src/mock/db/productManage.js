import { Table } from '@/mock/db/table.js'

export class ProductManage extends Table {
  constructor(dataList) {
    super(dataList)
  }

  async getList({ page, pageSize, name }) {
    return await super.getList(page, pageSize, (item) => {
      {
        if (name) {
          return item.name.includes(name)
        }
        return true
      }
    })
  }
}
