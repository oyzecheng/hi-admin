import { deepClone } from '@/utils/index.ts'

export class Table {
  constructor(table) {
    this._table = table
  }

  get table() {
    return deepClone(this._table)
  }

  add(data) {
    return new Promise((resolve) => {
      data.createAt = new Date().getTime()
      this._table.push(data)
      resolve('success')
    })
  }

  getItemById(id) {
    return new Promise((resolve, reject) => {
      const item = this.table.find((item) => item.id === id)
      if (item) {
        resolve(item)
      } else {
        reject(new Error(`Can't find by id: ${id}`))
      }
    })
  }

  deleteItemById(id) {
    return new Promise((resolve) => {
      this._table = this.table.filter((item) => item.id !== id)
      resolve('success')
    })
  }

  updateItem(id, data) {
    return new Promise((resolve, reject) => {
      const index = this.table.findIndex((item) => item.id === id)
      if (index !== -1) {
        this._table[index] = { ...this.table[index], ...data, id }
        resolve(this.table[index])
      } else {
        reject(new Error(`Can't find by id: ${id}`))
      }
    })
  }

  getAll() {
    return new Promise((resolve) => {
      resolve(this.table)
    })
  }

  getSortAll() {
    return new Promise((resolve) => {
      resolve(this.table.sort((a, b) => (a.createAt - b.createAt ? -1 : 1)))
    })
  }

  async getList(page, pageSize, filterFn) {
    const all = await this.getSortAll()
    const list = filterFn ? all.filter((item) => filterFn(item)) : all

    const dataPage = +page || 1
    const dataPageSize = +pageSize || 10
    return {
      page: dataPage,
      pageSize: dataPageSize,
      count: list.length,
      list: [...list].slice(
        (dataPage - 1) * dataPageSize,
        (dataPage - 1) * dataPageSize + dataPageSize
      )
    }
  }
}
