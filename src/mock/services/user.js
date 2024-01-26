import Mock from 'mockjs'
import { builder } from '@/mock/util.js'
import { routeData } from '@/mock/data/routeData.js'

const info = {
  id: '12',
  userName: 'admin',
  email: 'admin@gmail.com'
}

Mock.mock(/\/userInfo/, 'get', () => builder(info))

Mock.mock(/\/userRoutes/, 'get', () => builder(routeData))
