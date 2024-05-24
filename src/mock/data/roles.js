export const roles = [
  {
    id: '1',
    name: '管理员',
    description: '拥有管理权限',
    status: 1,
    auth: ['1', '2', '3', '4', '41', '42', '411', '412', '413', '6', '61']
  },
  {
    id: '2',
    name: '普通用户',
    description: '拥有部分权限',
    status: 1,
    auth: ['2', '3', '6', '61', '1']
  }
]
