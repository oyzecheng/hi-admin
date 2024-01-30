import Mock from 'mockjs'
import { builder, getBody } from '@/mock/util.js'
import { routeData } from '@/mock/data/routeData.js'

const Random = Mock.Random

Mock.mock(/\/router/, 'get', () => builder(routeData))

Mock.mock(/\/router/, 'post', (options) => {
  const body = getBody(options)
  body.id = Random.guid()
  routeData.push(body)
})
