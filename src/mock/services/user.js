import Mock from 'mockjs-async'
import { builder } from '@/mock/util.js'
import { mockDb } from '@/mock/db/index.js'

const info = {
  id: '12',
  userName: 'admin',
  email: 'admin@gmail.com'
}

Mock.mock(/\/userInfo/, 'get', () => builder(info))

Mock.mock(/\/userRoutes/, 'get', () => {
  return new Promise((resolve) => {
    mockDb.routerManage.getUserRouter().then((list) => {
      resolve(builder(list))
    })
  })
})
