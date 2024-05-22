import { mockDb } from '@/mock/db/index.js'
import { getBody, getUrlId, mock } from '@/mock/util.js'

mock.onGet(/^\/userManage\/[a-zA-Z0-9-]+$/).reply(async (config) => {
  const result = await mockDb.userManage.getItemById(getUrlId(config))
  return [200, result]
})

mock.onGet('/userManage').reply(async (config) => {
  const list = await mockDb.userManage.getList(config.params)
  return [200, list]
})

mock.onDelete(/^\/userManage\/[a-zA-Z0-9-]+$/).reply(async (config) => {
  const result = await mockDb.userManage.deleteItemById(getUrlId(config))
  return [200, result]
})

mock.onPatch(/^\/userManage\/[a-zA-Z0-9-]+$/).reply(async (config) => {
  const result = await mockDb.userManage.updateItem(getUrlId(config), getBody(config))
  return [200, result]
})

mock.onPost('/userManage').reply(async (config) => {
  const result = await mockDb.userManage.add(getBody(config))
  return [200, result]
})
