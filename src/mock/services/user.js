import Mock from 'mockjs'
import { builder } from '@/mock/util.js'

const info = {
  id: '12',
  userName: 'admin',
  email: 'admin@gmail.com'
}

Mock.mock(/\/userInfo/, 'get', () => builder(info))
