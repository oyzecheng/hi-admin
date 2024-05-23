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
    id: '3',
    routeName: 'table',
    routePath: '/table',
    componentName: 'TableView',
    pageTitle: '表格',
    routeIcon: 'table',
    sort: 3
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
            hidden: true
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
  },
  {
    id: '6',
    routeName: 'error',
    routePath: '/error',
    componentName: 'RouterView',
    pageTitle: '错误页',
    routeIcon: 'error',
    redirectRouteName: 'error404',
    sort: 6,
    children: [
      {
        id: '61',
        routeName: 'error404',
        routePath: '404',
        componentName: 'Error404View',
        pageTitle: '404',
        sort: 1
      }
    ]
  }
]
