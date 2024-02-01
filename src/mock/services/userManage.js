import { mockDb } from '@/mock/db/index.js'
import Mock from 'mockjs-async'
import { getBody, getQueryParams, getUrlId } from '@/mock/util.js'

Mock.mock(/^\/userManage\/[a-zA-Z0-9-]+$/, 'get', (options) =>
  mockDb.userManage.getItemById(getUrlId(options))
)

Mock.mock(/\/userManage/, 'get', (options) => mockDb.userManage.getList(getQueryParams(options)))

Mock.mock(/^\/userManage\/[a-zA-Z0-9-]+$/, 'delete', (options) =>
  mockDb.userManage.deleteItemById(getUrlId(options))
)

Mock.mock(/^\/userManage\/[a-zA-Z0-9-]+$/, 'post', (options) =>
  mockDb.userManage.updateItem(getUrlId(options), getBody(options))
)

Mock.mock(/^\/userManage$/, 'post', (options) => mockDb.userManage.add(getBody(options)))
