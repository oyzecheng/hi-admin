import Mock from 'mockjs-async'
import { Table } from '@/mock/db/table.js'

const Random = Mock.Random

const mockData = [
  { name: '启用', type: 'USER_STATUS', value: '1' },
  { name: '禁用', type: 'USER_STATUS', value: '2' },
  { name: '管理员', type: 'USER_ROLE', value: '1' },
  { name: '普通员工', type: 'USER_ROLE', value: '2' }
]

export class DataDictionary extends Table {
  constructor() {
    super('dataDictionary')
  }

  init(db) {
    super.init(db)
    if (!db.objectStoreNames.contains(this.tableName)) {
      this.createTable(db).then((store) => {
        mockData.forEach((item) => {
          store.add({ id: Random.guid(), ...item })
        })
      })
    }
  }
}
