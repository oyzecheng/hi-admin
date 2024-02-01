import { Table } from '@/mock/db/table.js'

export class CustomPage extends Table {
  constructor() {
    super('customPage')
  }

  init(db) {
    super.init(db)
    if (!db.objectStoreNames.contains(this.tableName)) {
      this.createTable(db).then(() => {})
    }
  }

  async saveItem(id, data) {
    const item = await this.getItemById(id)
    if (item) {
      return this.updateItem(id, data)
    } else {
      return this.add({ ...data, id })
    }
  }
}
