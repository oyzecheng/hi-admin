import Mock from 'mockjs-async'
import { mockDb } from '@/mock/db/index.js'
import { getBody, getUrlId } from '@/mock/util.js'

Mock.mock(/^\/customPage\/[a-zA-Z0-9-]+$/, 'get', (options) =>
  mockDb.customPage.getItemById(getUrlId(options))
)

Mock.mock(/^\/customPage\/[a-zA-Z0-9-]+$/, 'post', (options) =>
  mockDb.customPage.saveItem(getUrlId(options), getBody(options))
)
