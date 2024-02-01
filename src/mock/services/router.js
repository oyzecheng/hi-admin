import Mock from 'mockjs-async'
import { builder, getBody, getUrlId } from '@/mock/util.js'
import { mockDb } from '@/mock/db/index.js'

Mock.mock(/^\/router\/[a-zA-Z0-9-]+$/, 'get', (options) =>
  mockDb.routerManage.getItemById(getUrlId(options))
)

Mock.mock(/\/router/, 'get', () => {
  return new Promise((resolve) => {
    mockDb.routerManage.getSortAll().then((list) => {
      resolve(builder(list))
    })
  })
})

Mock.mock(/^\/router\/[a-zA-Z0-9-]+$/, 'post', (options) =>
  mockDb.routerManage.updateItem(getUrlId(options), getBody(options))
)

Mock.mock(/^\/router$/, 'post', (options) => mockDb.routerManage.add(getBody(options)))

Mock.mock(/^\/router\/[a-zA-Z0-9-]+$/, 'delete', (options) =>
  mockDb.routerManage.deleteItemById(getUrlId(options))
)
