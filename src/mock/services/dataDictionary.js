import Mock from 'mockjs-async'
import { mockDb } from '@/mock/db/index.js'
import { getBody, getQueryParams, getUrlId } from '@/mock/util.js'

Mock.mock(/^\/dataDictionary\/[a-zA-Z0-9-]+$/, 'get', (options) =>
  mockDb.dataDictionary.getItemById(getUrlId(options))
)

Mock.mock(/\/dataDictionary/, 'get', (options) => {
  return new Promise((resolve) => {
    mockDb.dataDictionary.getList(getQueryParams(options)).then((list) => {
      resolve(list)
    })
  })
})

Mock.mock(/^\/dataDictionary\/[a-zA-Z0-9-]+$/, 'delete', (options) =>
  mockDb.dataDictionary.deleteItemById(getUrlId(options))
)

Mock.mock(/^\/dataDictionary\/[a-zA-Z0-9-]+$/, 'post', (options) =>
  mockDb.dataDictionary.updateItem(getUrlId(options), getBody(options))
)

Mock.mock(/^\/dataDictionary$/, 'post', (options) => mockDb.dataDictionary.add(getBody(options)))
