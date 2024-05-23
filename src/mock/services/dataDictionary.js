import { mockDb } from '@/mock/db/index.js'
import { builder, getBody, getUrlId, mock } from '@/mock/util.js'

mock.onGet(/^\/dataDictionary\/[a-zA-Z0-9-]+$/).reply(async (config) => {
  const result = await mockDb.dataDictionary.getItemById(getUrlId(config))
  return [200, builder(result)]
})

mock.onGet('/dataDictionaryAll').reply(async () => {
  const list = await mockDb.dataDictionary.getAll()
  return [200, builder(list)]
})

mock.onGet('/dataDictionary').reply(async (config) => {
  const list = await mockDb.dataDictionary.getList(config.params)
  return [200, builder(list)]
})

mock.onGet('/dataDictionary').reply(async (config) => {
  const list = await mockDb.dataDictionary.getList(config.params)
  return [200, builder(list)]
})

mock.onDelete(/^\/dataDictionary\/[a-zA-Z0-9-]+$/).reply(async (config) => {
  const result = await mockDb.dataDictionary.deleteItemById(getUrlId(config))
  return [200, builder(result)]
})

mock.onPatch(/^\/dataDictionary\/[a-zA-Z0-9-]+$/).reply(async (config) => {
  const result = await mockDb.dataDictionary.updateItem(getUrlId(config), getBody(config))
  return [200, builder(result)]
})

mock.onPost('/dataDictionary').reply(async (config) => {
  const result = await mockDb.dataDictionary.add(getBody(config))
  return [200, builder(result)]
})
