import { UserManage } from '@/mock/db/userManage.js'
import { RouterManage } from '@/mock/db/routerManage.js'

const dbName = 'mockDb'

class Db {
  constructor() {
    this.initDb()
    this.dbServer = {}

    this.userManage = new UserManage()
    this.routerManage = new RouterManage()
  }

  initDb() {
    const openDb = window.indexedDB.open(dbName)
    openDb.onsuccess = () => {
      this.dbServer = openDb.result
      this.initTable()
    }
    openDb.onerror = (err) => {
      console.error('数据库打开出错', err)
    }
    openDb.onupgradeneeded = () => {
      this.dbServer = openDb.result
      this.initTable()
    }
  }

  initTable() {
    this.userManage.init(this.dbServer)
    this.routerManage.init(this.dbServer)
  }

  removeDb() {
    window.indexedDB.deleteDatabase(dbName)
  }
}

export const mockDb = new Db()
