import { UserManage } from '@/mock/db/userManage.js'
import { RouterManage } from '@/mock/db/routerManage.js'
import { DataDictionary } from '@/mock/db/dataDictionary.js'
import { routeData } from '@/mock/data/routeData.js'
import { users } from '@/mock/data/users.js'
import { dataDictionary } from '@/mock/data/dataDictionary.js'

class Db {
  constructor() {
    this.userManage = new UserManage(users)
    this.routerManage = new RouterManage(routeData)
    this.dataDictionary = new DataDictionary(dataDictionary)
  }
}

export const mockDb = new Db()
