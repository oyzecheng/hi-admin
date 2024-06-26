import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/LoginView.vue'),
    meta: { title: '登陆' }
  }
]

export const layoutRoute: RouteRecordRaw = {
  path: '/',
  component: () => import('@/layout/HILayout.vue'),
  children: []
}

export const tailRoute: RouteRecordRaw[] = [
  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/errors/Error404View.vue'),
    meta: { title: 'NotFound' }
  }
]

export const privateRoutes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/home/HomeView.vue'),
    meta: { title: '首页', icon: 'home' }
  },
  {
    name: 'form',
    path: '/form',
    component: () => import('@/views/form/FormView.vue'),
    meta: { title: '表单', icon: 'form' }
  },
  {
    name: 'user',
    path: '/user',
    component: () => import('@/layout/RouterView.vue'),
    redirect() {
      return { name: 'userList' }
    },
    meta: { title: '用户', icon: 'user' },
    children: [
      {
        name: 'userList',
        path: '',
        component: () => import('@/views/user/UserView.vue'),
        meta: { title: '列表' }
      },
      {
        name: 'userNew',
        path: 'new',
        component: () => import('@/views/user/new/UserNewView.vue'),
        meta: { title: '创建' }
      },
      {
        name: 'userEdit',
        path: ':id',
        component: () => import('@/views/user/new/UserNewView.vue'),
        meta: { title: '编辑' }
      },
      {
        name: 'userDetail',
        path: 'detail/:id',
        component: () => import('@/views/user/detail/UserDetailView.vue'),
        meta: { title: '详情' }
      }
    ]
  },
  {
    name: 'system',
    path: '/system',
    component: () => import('@/layout/RouterView.vue'),
    meta: { title: '系统', icon: 'system' },
    children: [
      {
        name: 'routerManage',
        path: 'routerManage',
        component: () => import('@/layout/RouterView.vue'),
        redirect() {
          return { name: 'routerManageList' }
        },
        meta: { title: '路由管理' },
        children: [
          {
            name: 'routerManageList',
            path: '',
            component: () => import('@/views/system/routerManage/RouterManage.vue'),
            meta: { title: '列表', hidden: true }
          },
          {
            name: 'routerManageNew',
            path: 'new',
            component: () => import('@/views/system/routerManage/new/RouterManageNewView.vue'),
            meta: { title: '创建', hidden: true }
          }
        ]
      },
      {
        name: 'dataDictionary',
        path: 'dataDictionary',
        component: () => import('@/layout/RouterView.vue'),
        meta: { title: '数据字典' },
        redirect() {
          return { name: 'dataDictionaryList' }
        },
        children: [
          {
            name: 'dataDictionaryList',
            path: '',
            component: () => import('@/views/system/dataDictionary/DataDictionary.vue'),
            meta: { title: '列表' }
          },
          {
            name: 'dataDictionaryNew',
            path: 'new',
            component: () => import('@/views/system/dataDictionary/new/DataDictionaryNew.vue'),
            meta: { title: '创建' }
          },
          {
            name: 'dataDictionaryEdit',
            path: ':id',
            component: () => import('@/views/system/dataDictionary/new/DataDictionaryNew.vue'),
            meta: { title: '编辑' }
          }
        ]
      }
    ]
  },
  {
    name: 'error',
    path: '/error',
    component: () => import('@/layout/RouterView.vue'),
    redirect() {
      return { name: 'error404' }
    },
    meta: { title: '错误页', icon: 'error' },
    children: [
      {
        name: 'error404',
        path: '404',
        component: () => import('@/views/errors/Error404View.vue'),
        meta: { title: '404' }
      }
    ]
  }
]
