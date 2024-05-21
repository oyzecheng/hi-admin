import { Table } from '@/mock/db/table.js'
import Mock from 'mockjs-async'

const Random = Mock.Random

export class UserManage extends Table {
  constructor() {
    super('userManage')
  }

  init(db) {
    super.init(db)
    if (!db.objectStoreNames.contains(this.tableName)) {
      this.createTable(db).then((store) => {
        const defaultList = new Array(50).fill('').map(() => ({
          id: Random.guid(),
          name: Random.cname(),
          email: Random.email(),
          status: Random.integer('1', '2'),
          role: Random.integer('1', '2'),
          address: Random.county(true),
          avatar: `https://static.oouzc.com/avatar/avatar_${Random.integer(1, 50)}.png`,
          createAt: new Date().getTime()
        }))
        defaultList.forEach((item) => {
          store.add(item)
        })
      })
    }
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
