import Mock from 'mockjs-async'
const Random = Mock.Random

export const routeData = [
  {
    id: Random.guid(),
    routeName: 'home',
    routePath: '/',
    componentName: 'HomeView',
    pageTitle: '首页',
    routeIcon: 'home',
    sort: 1
  },
  {
    id: Random.guid(),
    routeName: 'form',
    routePath: '/form',
    componentName: 'FormView',
    pageTitle: '表单',
    routeIcon: 'form',
    sort: 2
  },
  {
    id: Random.guid(),
    routeName: 'table',
    routePath: '/table',
    componentName: 'TableView',
    pageTitle: '表格',
    routeIcon: 'table',
    sort: 3
  },
  {
    id: Random.guid(),
    routeName: 'user',
    routePath: '/user',
    componentName: 'RouterView',
    pageTitle: '用户',
    routeIcon: 'user',
    redirectRouteName: 'userList',
    sort: 4,
    children: [
      {
        id: Random.guid(),
        routeName: 'userList',
        routePath: '',
        componentName: 'UserView',
        pageTitle: '列表',
        sort: 1
      },
      {
        id: Random.guid(),
        routeName: 'userNew',
        routePath: 'new',
        componentName: 'UserNewView',
        pageTitle: '创建',
        sort: 2
      },
      {
        id: Random.guid(),
        routeName: 'userEdit',
        routePath: ':id',
        componentName: 'UserNewView',
        pageTitle: '编辑',
        sort: 3
      },
      {
        id: Random.guid(),
        routeName: 'userDetail',
        routePath: 'detail/:id',
        componentName: 'UserDetailView',
        pageTitle: '详情',
        sort: 4
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
    sort: 5,
    children: [
      {
        id: Random.guid(),
        routeName: 'routerManage',
        routePath: 'routerManage',
        componentName: 'RouterView',
        pageTitle: '路由管理',
        redirectRouteName: 'routerManageList',
        sort: 1,
        children: [
          {
            id: Random.guid(),
            routeName: 'routerManageList',
            routePath: '',
            componentName: 'RouterManage',
            pageTitle: '列表',
            hidden: true,
            sort: 1
          },
          {
            id: Random.guid(),
            routeName: 'routerManageNew',
            routePath: 'new',
            componentName: 'RouterManageNewView',
            pageTitle: '创建',
            hidden: true,
            sort: 2
          },
          {
            id: Random.guid(),
            routeName: 'routerManageEdit',
            routePath: ':id',
            componentName: 'RouterManageNewView',
            pageTitle: '编辑',
            hidden: true,
            sort: 3
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
    sort: 6,
    children: [
      {
        id: Random.guid(),
        routeName: 'error404',
        routePath: '404',
        componentName: 'Error404View',
        pageTitle: '404',
        sort: 1
      }
    ]
  },
  {
    id: Random.guid(),
    routeName: 'customPage',
    routePath: '/customPage',
    componentName: 'CustomPageView',
    pageTitle: '自定义页面',
    routeIcon: 'customPage',
    sort: 7
  }
]
