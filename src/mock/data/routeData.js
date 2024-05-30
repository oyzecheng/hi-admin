export const routeData = [
  {
    id: '1',
    routeName: 'home',
    routePath: '/',
    componentName: 'HomeView',
    pageTitle: '首页',
    routeIcon: 'home',
    sort: 1
  },
  {
    id: '2',
    routeName: 'form',
    routePath: '/form',
    componentName: 'FormView',
    pageTitle: '表单',
    routeIcon: 'form',
    sort: 2
  },
  {
    id: '0eb8ec2426a71556',
    pageTitle: '产品',
    routeName: 'product',
    routePath: '/product',
    componentName: 'RouterView',
    routeIcon: 'product',
    redirectRouteName: 'productList',
    sort: 3,
    children: [
      {
        id: '95aef3adc7417309',
        pageTitle: '列表',
        routeName: 'productList',
        routePath: '',
        componentName: 'ProductView',
        hidden: true,
        parentId: '0eb8ec2426a71556',
        sort: 1,
        buttons: [
          {
            key: 'productList.4ba33a94a7a13e09',
            name: '新建/编辑'
          },
          {
            key: 'productList.d15601472b4a56fd',
            name: '删除'
          }
        ]
      },
      {
        id: '4835c0a9c0892234',
        pageTitle: '新建',
        routeName: 'productNew',
        routePath: 'new',
        componentName: 'ProductNew',
        hidden: true,
        parentId: '0eb8ec2426a71556',
        sort: 2
      },
      {
        id: '2a833622ccf3767f',
        pageTitle: '编辑',
        routeName: 'productEdit',
        routePath: ':id',
        componentName: 'ProductNew',
        hidden: true,
        parentId: '0eb8ec2426a71556',
        sort: 3
      }
    ]
  },
  {
    id: '4',
    routeName: 'user',
    routePath: '/user',
    componentName: 'RouterView',
    pageTitle: '用户',
    routeIcon: 'user',
    redirectRouteName: 'userList',
    sort: 4,
    children: [
      {
        id: '41',
        routeName: 'userList',
        routePath: '',
        componentName: 'RouterView',
        redirectRouteName: 'userListPage',
        pageTitle: '用户',
        sort: 1,
        children: [
          {
            id: '411',
            routeName: 'userListPage',
            routePath: '',
            componentName: 'UserView',
            pageTitle: '列表',
            sort: 1,
            hidden: true,
            buttons: [
              {
                key: 'userListPage.e9287ac5276d6c7f',
                name: '新建/编辑'
              },
              {
                key: 'userListPage.a5b5b4cb83679665',
                name: '查看'
              },
              {
                key: 'userListPage.6330e59450d8f970',
                name: '删除'
              },
              {
                key: 'userListPage.f5f2de16471c790c',
                name: '启用/禁用'
              }
            ]
          },
          {
            id: '412',
            routeName: 'userEdit',
            routePath: ':id',
            componentName: 'UserNewView',
            pageTitle: '编辑',
            sort: 3,
            hidden: true
          },
          {
            id: '413',
            routeName: 'userDetail',
            routePath: 'detail/:id',
            componentName: 'UserDetailView',
            pageTitle: '详情',
            sort: 4,
            hidden: true
          }
        ]
      },
      {
        id: '42',
        routeName: 'userNew',
        routePath: 'new',
        componentName: 'UserNewView',
        pageTitle: '创建',
        sort: 2
      }
    ]
  },
  {
    id: '5',
    routeName: 'system',
    routePath: '/system',
    componentName: 'RouterView',
    pageTitle: '系统',
    routeIcon: 'system',
    redirectRouteName: 'routerManage',
    sort: 5,
    children: [
      {
        id: '51',
        routeName: 'routerManage',
        routePath: 'routerManage',
        componentName: 'RouterView',
        pageTitle: '路由管理',
        redirectRouteName: 'routerManageList',
        sort: 1,
        buttons: [
          {
            key: 'routerManage.d7c30928d23eaaff',
            name: '创建/编辑'
          },
          {
            key: 'routerManage.3c85a1d6743c02a0',
            name: '删除'
          },
          {
            key: 'routerManage.71a89e7b993f4817',
            name: '显示/隐藏'
          }
        ],
        children: [
          {
            id: '511',
            routeName: 'routerManageList',
            routePath: '',
            componentName: 'RouterManage',
            pageTitle: '列表',
            hidden: true,
            sort: 1
          },
          {
            id: '512',
            routeName: 'routerManageNew',
            routePath: 'new',
            componentName: 'RouterManageNewView',
            pageTitle: '创建',
            hidden: true,
            sort: 2
          },
          {
            id: '513',
            routeName: 'routerManageEdit',
            routePath: ':id',
            componentName: 'RouterManageNewView',
            pageTitle: '编辑',
            hidden: true,
            sort: 3
          }
        ]
      },
      {
        id: '52',
        routeName: 'dataDictionary',
        routePath: 'dataDictionary',
        componentName: 'RouterView',
        pageTitle: '数据字典',
        redirectRouteName: 'dataDictionaryList',
        sort: 2,
        buttons: [
          {
            key: 'dataDictionary.b2e7501ee7e3eebf',
            name: '创建/编辑'
          },
          {
            key: 'dataDictionary.addb37696b9cbba3',
            name: '删除'
          }
        ],
        children: [
          {
            id: '521',
            routeName: 'dataDictionaryList',
            routePath: '',
            componentName: 'DataDictionary',
            pageTitle: '列表',
            hidden: true,
            sort: 1
          },
          {
            id: '522',
            routeName: 'dataDictionaryNew',
            routePath: 'new',
            componentName: 'DataDictionaryNew',
            pageTitle: '创建',
            hidden: true,
            sort: 2
          },
          {
            id: '523',
            routeName: 'dataDictionaryEdit',
            routePath: ':id',
            componentName: 'DataDictionaryNew',
            pageTitle: '编辑',
            hidden: true,
            sort: 3
          }
        ]
      },
      {
        id: '53',
        routeName: 'roleManage',
        routePath: 'roleManage',
        componentName: 'RouterView',
        pageTitle: '角色管理',
        redirectRouteName: 'roleManageList',
        sort: 3,
        buttons: [
          {
            key: 'roleManage.8ecf5acf12743a3c',
            name: '创建/编辑'
          },
          {
            key: 'roleManage.beabc395a59d6973',
            name: '删除'
          },
          {
            key: 'roleManage.f18d43f744436418',
            name: '启用/禁用'
          }
        ],
        children: [
          {
            id: '531',
            routeName: 'roleManageList',
            routePath: '',
            componentName: 'RoleManage',
            pageTitle: '列表',
            hidden: true,
            sort: 1
          },
          {
            id: '532',
            routeName: 'roleManageNew',
            routePath: 'new',
            componentName: 'RoleManageNew',
            pageTitle: '创建',
            hidden: true,
            sort: 2
          },
          {
            id: '533',
            routeName: 'roleManageEdit',
            routePath: ':id',
            componentName: 'RoleManageNew',
            pageTitle: '编辑',
            hidden: true,
            sort: 3
          }
        ]
      }
    ]
  }
]
