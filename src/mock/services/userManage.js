import Mock from 'mockjs'
import { GenerateList } from '@/mock/util.js'
const Random = Mock.Random

const userList = new GenerateList((count) =>
  new Array(count).fill('').map(() => ({
    id: Random.guid(),
    name: Random.cname(),
    email: Random.email(),
    status: Random.integer(1, 2),
    role: Random.integer(1, 2),
    address: Random.county(true),
    avatar: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Random.integer(
      1,
      25
    )}.jpg`
  }))
)

Mock.mock(/\/userManageDetail/, 'get', (options) => userList.getDetail(options))

Mock.mock(/\/userManage/, 'get', (options) => userList.getResult(options))

Mock.mock(/\/userManage/, 'delete', (options) => userList.deleteItem(options))
