export default {
  RouterView: () => import('@/layout/RouterView.vue'),

  // 用户
  UserList: () => import('@/views/user/UserView.vue'),
  UserNew: () => import('@/views/user/new/UserNewView.vue'),
  UserDetail: () => import('@/views/user/detail/UserDetailView.vue')
}
