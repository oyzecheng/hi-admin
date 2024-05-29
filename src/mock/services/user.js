import { builder, builderError, getBody, getUserInfo, mock } from '@/mock/util.js'
import { mockDb } from '@/mock/db/index.js'

const adminInfo = {
  id: '12admin',
  userName: 'admin',
  email: 'admin@gmail.com',
  role: 1
}

mock.onPost('/login').reply(async (config) => {
  const { email, password } = getBody(config)
  if (password !== '123') {
    return [200, builderError('用户名或密码错误')]
  }

  if (email === adminInfo.email) {
    return [200, builder(adminInfo)]
  }
  // 判断用户是否存在以及是否启用
  // 判断用户的角色是否存在以及启用
  const user = await mockDb.userManage.getUserByEmail(email)
  const roleInfo = await mockDb.roleManage.getItemById(user.role)
  if (user && user.status === 1 && roleInfo && roleInfo.status === 1) {
    return [200, builder(user)]
  }

  return [200, builderError('用户名或密码错误')]
})

mock.onGet('/userInfo').reply(async (config) => {
  const userInfo = getUserInfo(config)
  const user = await mockDb.userManage.getUserByEmail(userInfo?.email)

  if (!userInfo || (userInfo.email !== user?.email && userInfo.email !== adminInfo.email)) {
    return [200, builderError('请先登录', 403)]
  }

  return [200, builder(user || adminInfo)]
})

mock.onGet('/userRoutes').reply(async (config) => {
  const { role, email } = getUserInfo(config) || {}

  const user = await mockDb.userManage.getUserByEmail(email)

  if (email !== user?.email && email !== adminInfo.email) {
    return [200, builderError('请先登录', 403)]
  }

  const roleInfo = email !== adminInfo.email ? await mockDb.roleManage.getItemById(role) : null
  const list = await mockDb.routerManage.getUserRouter(roleInfo?.auth)
  return [200, builder(list)]
})
