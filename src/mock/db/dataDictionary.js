import { Table } from '@/mock/db/table.js'

export class DataDictionary extends Table {
  constructor() {
    super('dataDictionary')
  }

  init(db) {
    super.init(db)
    if (!db.objectStoreNames.contains(this.tableName)) {
      this.createTable(db).then(() => {})
    }
  }
}
