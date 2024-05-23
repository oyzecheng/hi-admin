import { mockDb } from '@/mock/db/index.js'
import { builder, getBody, getUrlId, mock } from '@/mock/util.js'

mock.onGet(/^\/userManage\/[a-zA-Z0-9-]+$/).reply(async (config) => {
  const result = await mockDb.userManage.getItemById(getUrlId(config))
  return [200, builder(result)]
})

mock.onGet('/userManage').reply(async (config) => {
  const list = await mockDb.userManage.getList(config.params)
  return [200, builder(list)]
})

mock.onDelete(/^\/userManage\/[a-zA-Z0-9-]+$/).reply(async (config) => {
  const result = await mockDb.userManage.deleteItemById(getUrlId(config))
  return [200, builder(result)]
})

mock.onPatch(/^\/userManage\/[a-zA-Z0-9-]+$/).reply(async (config) => {
  const result = await mockDb.userManage.updateItem(getUrlId(config), getBody(config))
  return [200, builder(result)]
})

mock.onPost('/userManage').reply(async (config) => {
  const result = await mockDb.userManage.add(getBody(config))
  return [200, builder(result)]
})
