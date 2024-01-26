import Mock from 'mockjs'
import { builder } from '@/mock/util.js'
import { routeData } from '@/mock/data/routeData.js'

Mock.mock(/\/router/, 'get', () => builder(routeData))
