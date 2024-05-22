import { builder, getBody, mock } from '@/mock/util.js'
import { mockDb } from '@/mock/db/index.js'

const adminInfo = {
  id: '12admin',
  userName: 'admin',
  email: 'admin@gmail.com'
}

mock.onPost('/login').reply(async (config) => {
  const body = getBody(config)
  return [200, body]
})

mock.onGet('/userInfo').reply(200, builder(adminInfo))

mock.onGet('/userRoutes').reply(async () => {
  const list = await mockDb.routerManage.getUserRouter()
  return [200, builder(list)]
})
