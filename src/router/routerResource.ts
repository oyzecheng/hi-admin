export default {
  RouterView: () => import('@/layout/RouterView.vue'),

  // 首页
  HomeView: () => import('@/views/home/HomeView.vue'),

  // 表单
  FormView: () => import('@/views/form/FormView.vue'),

  //表格
  TableView: () => import('@/views/table/TableView.vue'),

  // 用户
  UserView: () => import('@/views/user/UserView.vue'),
  UserNewView: () => import('@/views/user/new/UserNewView.vue'),
  UserDetailView: () => import('@/views/user/detail/UserDetailView.vue'),

  // 系统
  // 路由管理
  RouterManage: () => import('@/views/system/routerManage/RouterManage.vue'),
  RouterManageNewView: () => import('@/views/system/routerManage/new/RouterManageNewView.vue'),

  // 错误页
  Error404View: () => import('@/views/errors/Error404View.vue')
}
