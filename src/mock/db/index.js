import { UserManage } from '@/mock/db/userManage.js'
import { RouterManage } from '@/mock/db/routerManage.js'
import { CustomPage } from '@/mock/db/customPage.js'
import { DataDictionary } from '@/mock/db/dataDictionary.js'

const dbName = 'mockDb'

class Db {
  constructor() {
    this.initDb()
    this.dbServer = {}

    this.userManage = new UserManage()
    this.routerManage = new RouterManage()
    this.customPage = new CustomPage()
    this.dataDictionary = new DataDictionary()
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
    this.customPage.init(this.dbServer)
    this.dataDictionary.init(this.dbServer)
  }

  removeDb() {
    window.indexedDB.deleteDatabase(dbName)
  }
}

export const mockDb = new Db()
