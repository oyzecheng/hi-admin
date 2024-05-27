import { builder, mock, getBody, getUrlId } from '@/mock/util.js'
import { mockDb } from '@/mock/db/index.js'

mock.onGet('/products').reply(async (config) => {
  const list = await mockDb.productManage.getList(config.params)
  list.list.forEach((item) => {
    item.cover = typeof item.cover === 'string' ? item.cover.split(',') : item.cover
  })
  return [200, builder(list)]
})

mock.onPost('/products').reply(async (config) => {
  const body = getBody(config)
  const result = await mockDb.productManage.add(body)
  return [200, builder(result)]
})

mock.onPatch(/^\/products\/[a-zA-Z0-9-]+$/).reply(async (config) => {
  const result = await mockDb.productManage.updateItem(getUrlId(config), getBody(config))
  return [200, builder(result)]
})

mock.onDelete(/^\/products\/[a-zA-Z0-9-]+$/).reply(async (config) => {
  const result = await mockDb.productManage.deleteItemById(getUrlId(config))
  return [200, builder(result)]
})

mock.onGet(/^\/products\/[a-zA-Z0-9-]+$/).reply(async (config) => {
  const result = await mockDb.productManage.getItemById(getUrlId(config))
  return [200, builder(result)]
})
