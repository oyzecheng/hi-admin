import { generateKey } from '@/utils/index.ts'

export const routeData = [
  {
    id: generateKey(),
    routeName: 'home',
    routePath: '/',
    componentName: 'HomeView',
    pageTitle: '首页',
    routeIcon: 'home',
    sort: 1
  },
  {
    id: generateKey(),
    routeName: 'form',
    routePath: '/form',
    componentName: 'FormView',
    pageTitle: '表单',
    routeIcon: 'form',
    sort: 2
  },
  {
    id: generateKey(),
    routeName: 'table',
    routePath: '/table',
    componentName: 'TableView',
    pageTitle: '表格',
    routeIcon: 'table',
    sort: 3
  },
  {
    id: generateKey(),
    routeName: 'user',
    routePath: '/user',
    componentName: 'RouterView',
    pageTitle: '用户',
    routeIcon: 'user',
    redirectRouteName: 'userList',
    sort: 4,
    children: [
      {
        id: generateKey(),
        routeName: 'userList',
        routePath: '',
        componentName: 'UserView',
        pageTitle: '列表',
        sort: 1
      },
      {
        id: generateKey(),
        routeName: 'userNew',
        routePath: 'new',
        componentName: 'UserNewView',
        pageTitle: '创建',
        sort: 2
      },
      {
        id: generateKey(),
        routeName: 'userEdit',
        routePath: ':id',
        componentName: 'UserNewView',
        pageTitle: '编辑',
        sort: 3,
        hidden: true
      },
      {
        id: generateKey(),
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
    id: generateKey(),
    routeName: 'system',
    routePath: '/system',
    componentName: 'RouterView',
    pageTitle: '系统',
    routeIcon: 'system',
    redirectRouteName: 'routerManage',
    sort: 5,
    children: [
      {
        id: generateKey(),
        routeName: 'routerManage',
        routePath: 'routerManage',
        componentName: 'RouterView',
        pageTitle: '路由管理',
        redirectRouteName: 'routerManageList',
        sort: 1,
        children: [
          {
            id: generateKey(),
            routeName: 'routerManageList',
            routePath: '',
            componentName: 'RouterManage',
            pageTitle: '列表',
            hidden: true,
            sort: 1
          },
          {
            id: generateKey(),
            routeName: 'routerManageNew',
            routePath: 'new',
            componentName: 'RouterManageNewView',
            pageTitle: '创建',
            hidden: true,
            sort: 2
          },
          {
            id: generateKey(),
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
        id: generateKey(),
        routeName: 'dataDictionary',
        routePath: 'dataDictionary',
        componentName: 'RouterView',
        pageTitle: '数据字典',
        redirectRouteName: 'dataDictionaryList',
        sort: 2,
        children: [
          {
            id: generateKey(),
            routeName: 'dataDictionaryList',
            routePath: '',
            componentName: 'DataDictionary',
            pageTitle: '列表',
            hidden: true,
            sort: 1
          },
          {
            id: generateKey(),
            routeName: 'dataDictionaryNew',
            routePath: 'new',
            componentName: 'DataDictionaryNew',
            pageTitle: '创建',
            hidden: true,
            sort: 2
          },
          {
            id: generateKey(),
            routeName: 'dataDictionaryEdit',
            routePath: ':id',
            componentName: 'DataDictionaryNew',
            pageTitle: '编辑',
            hidden: true,
            sort: 3
          }
        ]
      }
    ]
  },
  {
    id: generateKey(),
    routeName: 'error',
    routePath: '/error',
    componentName: 'RouterView',
    pageTitle: '错误页',
    routeIcon: 'error',
    redirectRouteName: 'error404',
    sort: 6,
    children: [
      {
        id: generateKey(),
        routeName: 'error404',
        routePath: '404',
        componentName: 'Error404View',
        pageTitle: '404',
        sort: 1
      }
    ]
  }
]
