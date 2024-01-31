export class Table {
  constructor(tableName) {
    this.tableName = tableName
    this.store = {}
  }

  init(db) {
    this.db = db
  }

  createTable(db) {
    return new Promise((resolve) => {
      const store = db.createObjectStore(this.tableName, { keyPath: 'id' })
      resolve(store)
    })
  }

  getStore(type = 'readwrite') {
    return this.db.transaction(this.tableName, type).objectStore(this.tableName)
  }

  add(data) {
    return new Promise((resolve, reject) => {
      const store = this.getStore()
      data.createAt = new Date().getTime()
      const work = store.add(data)
      work.onsuccess = () => {
        resolve(`add success: ${data}`)
      }
      work.onerror = () => {
        reject(`add error: ${data}`)
      }
    })
  }

  getItemById(id) {
    return new Promise((resolve, reject) => {
      const store = this.getStore('readonly')
      const work = store.get(id)
      work.onsuccess = (event) => {
        const result = event.target.result
        resolve(result)
      }
      work.onerror = () => {
        reject('error')
      }
    })
  }

  deleteItemById(id) {
    return new Promise((resolve, reject) => {
      const store = this.getStore()
      const work = store.delete(id)
      work.onsuccess = () => {
        resolve('success')
      }
      work.onerror = () => {
        reject('error')
      }
    })
  }

  updateItem(id, data) {
    return new Promise((resolve, reject) => {
      this.getItemById(id)
        .then((item) => {
          const store = this.getStore()
          const work = store.put({ ...item, ...data, id })
          work.onsuccess = () => resolve('success')
          work.onerror = () => reject('error')
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  getAll() {
    return new Promise((resolve, reject) => {
      const store = this.getStore('readonly')
      const work = store.getAll()
      work.onsuccess = () => {
        resolve(work.result)
      }
      work.onerror = () => {
        reject('getAll error')
      }
    })
  }

  getSortAll() {
    return new Promise((resolve, reject) => {
      const store = this.getStore('readonly')
      const work = store.openCursor()
      const list = []
      work.onsuccess = (event) => {
        const result = event.target.result
        if (result) {
          if (result.value.createAt < list?.[0]?.createAt) {
            list.push(result.value)
          } else {
            list.unshift(result.value)
          }
          result.continue()
        } else {
          resolve(list)
        }
      }
      work.onerror = () => reject('error')
    })
  }

  async getList(page, pageSize, filterFn) {
    const all = await this.getSortAll()
    if (all.length) {
      const list = filterFn ? all.filter((item) => filterFn(item)) : all

      const dataPage = +page || 1
      const dataPageSize = +pageSize || 10
      return {
        data: {
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
  }
}
