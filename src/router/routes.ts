export const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/home/HomeView.vue'),
    meta: { title: '首页' }
  },
  {
    name: 'form',
    path: '/form',
    component: () => import('@/views/form/FormView.vue'),
    meta: { title: '表单' }
  },
  {
    name: 'table',
    path: '/table',
    component: () => import('@/views/table/TableView.vue'),
    meta: { title: '表格' }
  },
  {
    name: 'user',
    path: '/',
    component: () => import('@/layout/RouterView.vue'),
    redirect() {
      return { name: 'userList' }
    },
    meta: { title: '用户' },
    children: [
      {
        name: 'userList',
        path: 'user',
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
  }
]