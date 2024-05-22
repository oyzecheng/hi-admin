import { builder, getBody, getUrlId, mock } from '@/mock/util.js'
import { mockDb } from '@/mock/db/index.js'

mock.onGet(/^\/router\/[a-zA-Z0-9-]+$/).reply(async (config) => {
  const result = await mockDb.routerManage.getItemById(getUrlId(config))
  return [200, result]
})

mock.onGet('/router').reply(async () => {
  const list = await mockDb.routerManage.getSortAll()
  return [200, builder(list)]
})

mock.onPatch(/^\/router\/[a-zA-Z0-9-]+$/).reply(async (config) => {
  const result = await mockDb.routerManage.updateItem(getUrlId(config), getBody(config))
  return [200, result]
})

mock.onPost('/router$').reply(async (config) => {
  const result = await mockDb.routerManage.add(getBody(config))
  return [200, result]
})

mock.onDelete(/^\/router\/[a-zA-Z0-9-]+$/).reply(async (config) => {
  const result = await mockDb.routerManage.deleteItemById(getUrlId(config))
  return [200, result]
})
