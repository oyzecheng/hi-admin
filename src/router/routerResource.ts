export default {
  RouterView: () => import('@/layout/RouterView.vue'),

  // 首页
  HomeView: () => import('@/views/home/HomeView.vue'),

  // 表单
  FormView: () => import('@/views/form/FormView.vue'),

  // 产品
  ProductView: () => import('@/views/product/ProductVIew.vue'),
  ProductNew: () => import('@/views/product/new/ProductNew.vue'),

  // 用户
  UserView: () => import('@/views/user/UserView.vue'),
  UserNewView: () => import('@/views/user/new/UserNewView.vue'),
  UserDetailView: () => import('@/views/user/detail/UserDetailView.vue'),

  // 系统
  // 路由管理
  RouterManage: () => import('@/views/system/routerManage/RouterManage.vue'),
  RouterManageNewView: () => import('@/views/system/routerManage/new/RouterManageNewView.vue'),
  // 数据字典
  DataDictionary: () => import('@/views/system/dataDictionary/DataDictionary.vue'),
  DataDictionaryNew: () => import('@/views/system/dataDictionary/new/DataDictionaryNew.vue'),
  // 角色管理
  RoleManage: () => import('@/views/system/roleManage/RoleManage.vue'),
  RoleManageNew: () => import('@/views/system/roleManage/new/RoleManageView.vue')
}
