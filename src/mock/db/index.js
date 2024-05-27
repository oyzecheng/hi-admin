import { UserManage } from '@/mock/db/userManage.js'
import { RouterManage } from '@/mock/db/routerManage.js'
import { DataDictionary } from '@/mock/db/dataDictionary.js'
import { RoleManage } from '@/mock/db/roleManage.js'
import { ProductManage } from '@/mock/db/productManage.js'
import { routeData } from '@/mock/data/routeData.js'
import { users } from '@/mock/data/users.js'
import { dataDictionary } from '@/mock/data/dataDictionary.js'
import { roles } from '@/mock/data/roles.js'
import { products } from '@/mock/data/products.js'

class Db {
  constructor() {
    this.userManage = new UserManage(users)
    this.routerManage = new RouterManage(routeData)
    this.dataDictionary = new DataDictionary(dataDictionary)
    this.roleManage = new RoleManage(roles)
    this.productManage = new ProductManage(products)
  }
}

export const mockDb = new Db()
