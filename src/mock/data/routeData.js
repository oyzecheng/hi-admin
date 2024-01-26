import Mock from 'mockjs'
const Random = Mock.Random

export const routeData = [
  {
    id: Random.guid(),
    routeName: 'home',
    routePath: '/',
    componentName: 'HomeView',
    pageTitle: '首页',
    routeIcon: 'home'
  },
  {
    id: Random.guid(),
    routeName: 'form',
    routePath: '/form',
    componentName: 'FormView',
    pageTitle: '表单',
    routeIcon: 'form'
  },
  {
    id: Random.guid(),
    routeName: 'table',
    routePath: '/table',
    componentName: 'TableView',
    pageTitle: '表格',
    routeIcon: 'table'
  },
  {
    id: Random.guid(),
    routeName: 'user',
    routePath: '/user',
    componentName: 'RouterView',
    pageTitle: '用户',
    routeIcon: 'user',
    redirectRouteName: 'userList',
    children: [
      {
        id: Random.guid(),
        routeName: 'userList',
        routePath: '',
        componentName: 'UserView',
        pageTitle: '列表'
      },
      {
        id: Random.guid(),
        routeName: 'userNew',
        routePath: 'new',
        componentName: 'UserNewView',
        pageTitle: '创建'
      },
      {
        id: Random.guid(),
        routeName: 'userEdit',
        routePath: ':id',
        componentName: 'UserNewView',
        pageTitle: '编辑'
      },
      {
        id: Random.guid(),
        routeName: 'userDetail',
        routePath: 'detail/:id',
        componentName: 'UserDetailView',
        pageTitle: '详情'
      }
    ]
  },
  {
    id: Random.guid(),
    routeName: 'system',
    routePath: '/system',
    componentName: 'RouterView',
    pageTitle: '系统',
    routeIcon: 'system',
    redirectRouteName: 'routerManage',
    children: [
      {
        id: Random.guid(),
        routeName: 'routerManage',
        routePath: 'routerManage',
        componentName: 'RouterView',
        pageTitle: '路由管理',
        redirectRouteName: 'routerManageList',
        children: [
          {
            id: Random.guid(),
            routeName: 'routerManageList',
            routePath: '',
            componentName: 'RouterManage',
            pageTitle: '列表',
            hidden: true
          },
          {
            id: Random.guid(),
            routeName: 'routerManageNew',
            routePath: 'new',
            componentName: 'RouterManageNewView',
            pageTitle: '创建',
            hidden: true
          }
        ]
      }
    ]
  },
  {
    id: Random.guid(),
    routeName: 'error',
    routePath: '/error',
    componentName: 'RouterView',
    pageTitle: '错误页',
    routeIcon: 'error',
    redirectRouteName: 'error404',
    children: [
      {
        id: Random.guid(),
        routeName: 'error404',
        routePath: '404',
        componentName: 'Error404View',
        pageTitle: '404'
      }
    ]
  }
]
