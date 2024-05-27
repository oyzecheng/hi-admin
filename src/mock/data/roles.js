export const roles = [
  {
    id: '1',
    name: '管理员',
    description: '拥有管理权限',
    status: 1,
    auth: [
      '1',
      '2',
      '3',
      '4',
      '41',
      '42',
      '411',
      '412',
      '413',
      '6',
      '61',
      'userListPage.e9287ac5276d6c7f',
      'userListPage.a5b5b4cb83679665',
      'userListPage.6330e59450d8f970',
      'userListPage.f5f2de16471c790c'
    ]
  },
  {
    id: '2',
    name: '普通用户',
    description: '拥有部分权限',
    status: 1,
    auth: ['2', '3', '6', '61', '1', '4', '41', '411', '413', 'userListPage.a5b5b4cb83679665']
  }
]
