import { createRouter, createWebHistory, useRouter } from 'vue-router'
import { routes } from '@/router/routes'
import { GetItem } from '@/utils/storage'
import { USER_TOKEN } from '@/constant/user'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  const router = useRouter()
  const userStore = useUserStore()

  const token = GetItem(USER_TOKEN)
  if (!token && to.name !== 'login') {
    return { name: 'login' }
  }
  if (token && to.name === 'login') {
    return { path: '/' }
  }
  if (token && !userStore.info.userInfo) {
    userStore.initUserConfig()
    router.replace({ path: to.path })
  }
})

export default router
