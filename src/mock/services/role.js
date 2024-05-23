import { builder, mock, getBody, getUrlId } from '../util.js'
import { mockDb } from '@/mock/db/index.js'

mock.onGet('/roleManageAll').reply(async () => {
  const list = await mockDb.roleManage.getSortAll()
  return [200, builder(list)]
})

mock.onGet(/^\/roleManage\/[a-zA-Z0-9-]+$/).reply(async (config) => {
  const result = await mockDb.roleManage.getItemById(getUrlId(config))
  return [200, builder(result)]
})

mock.onGet('/roleManage').reply(async (config) => {
  const list = await mockDb.roleManage.getList(config.params)
  return [200, builder(list)]
})

mock.onPost('/roleManage').reply(async (config) => {
  const body = getBody(config)
  const result = await mockDb.roleManage.add(body)
  return [200, builder(result)]
})

mock.onPatch(/^\/roleManage\/[a-zA-Z0-9-]+$/).reply(async (config) => {
  const result = await mockDb.roleManage.updateItem(getUrlId(config), getBody(config))
  return [200, builder(result)]
})

mock.onDelete(/^\/roleManage\/[a-zA-Z0-9-]+$/).reply(async (config) => {
  const result = await mockDb.roleManage.deleteItemById(getUrlId(config))
  return [200, builder(result)]
})
