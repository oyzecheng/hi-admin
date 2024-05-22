import { Table } from '@/mock/db/table.js'

export class UserManage extends Table {
  constructor(dataList) {
    super(dataList)
  }

  async getList({ page, pageSize, name, status }) {
    return await super.getList(page, pageSize, (item) => {
      {
        if (name && status) {
          return item.name.includes(name) && item.status === +status
        }
        if (name) {
          return item.name.includes(name)
        }
        if (status) {
          return item.status === +status
        }
        return true
      }
    })
  }
}
