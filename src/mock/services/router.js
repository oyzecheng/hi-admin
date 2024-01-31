import Mock from 'mockjs-async'
import { builder, getBody } from '@/mock/util.js'
import { routeData } from '@/mock/data/routeData.js'
import { mockDb } from '@/mock/db/index.js'

const Random = Mock.Random

// Mock.mock(/\/router/, 'get', () => builder(routeData))
Mock.mock(/\/router/, 'get', () => {
  return new Promise((resolve) => {
    mockDb.routerManage.getSortAll().then((list) => {
      resolve(builder(list))
    })
  })
})

Mock.mock(/\/router/, 'post', (options) => {
  const body = getBody(options)
  body.id = Random.guid()
  routeData.push(body)
})
