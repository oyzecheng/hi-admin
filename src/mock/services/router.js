import { builder, getBody, getUrlId, mock } from '@/mock/util.js'
import { mockDb } from '@/mock/db/index.js'

mock.onGet(/^\/router\/[a-zA-Z0-9-]+$/).reply(async (config) => {
  const result = await mockDb.routerManage.getItemById(getUrlId(config))
  return [200, builder(result)]
})

mock.onGet('/router').reply(async () => {
  const list = await mockDb.routerManage.getSortAll()
  return [200, builder({ list, page: 1, pageSize: 10 })]
})

mock.onPatch(/^\/router\/[a-zA-Z0-9-]+$/).reply(async (config) => {
  const result = await mockDb.routerManage.updateItem(getUrlId(config), getBody(config))
  return [200, builder(result)]
})

mock.onPost('/router').reply(async (config) => {
  const result = await mockDb.routerManage.add(getBody(config))
  return [200, builder(result)]
})

mock.onDelete(/^\/router\/[a-zA-Z0-9-]+$/).reply(async (config) => {
  const result = await mockDb.routerManage.deleteItemById(getUrlId(config))
  return [200, builder(result)]
})
