export const routes = [
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
    name: 'table',
    path: '/table',
    component: () => import('@/views/table/TableView.vue'),
    meta: { title: '表格', icon: 'table' }
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
        name: 'userDetail',
        path: 'detail/:id',
        component: () => import('@/views/user/detail/UserDetailView.vue'),
        meta: { title: '详情' }
      }
    ]
  },
  {
    name: 'error',
    path: '/error',
    component: () => import('@/layout/RouterView.vue'),
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
