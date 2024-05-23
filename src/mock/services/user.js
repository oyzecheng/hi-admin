import { builder, builderError, getBody, getUserInfo, mock } from '@/mock/util.js'
import { mockDb } from '@/mock/db/index.js'

const adminInfo = {
  id: '12admin',
  userName: 'admin',
  email: 'admin@gmail.com',
  role: 1
}

mock.onPost('/login').reply(async (config) => {
  const { email } = getBody(config)
  if (email === adminInfo.email) {
    return [200, builder(adminInfo)]
  }
  const user = await mockDb.userManage.getUserByEmail(email)
  if (user && user.status === 1) {
    return [200, builder(user)]
  }
  return [200, builderError('用户名或密码错误')]
})

mock.onGet('/userInfo').reply(async (config) => {
  const userInfo = getUserInfo(config)
  const user = await mockDb.userManage.getUserByEmail(userInfo.email)

  if (!userInfo || (userInfo.email !== user?.email && userInfo.email !== adminInfo.email)) {
    return [200, builderError('请先登录', 403)]
  }

  return [200, builder(user || adminInfo)]
})

mock.onGet('/userRoutes').reply(async () => {
  const list = await mockDb.routerManage.getUserRouter()
  return [200, builder(list)]
})
