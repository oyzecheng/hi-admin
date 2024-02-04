import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/routes'
import { GetItem } from '@/utils/storage'
import { USER_TOKEN } from '@/constant/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  const token = GetItem(USER_TOKEN)
  if (!token && to.name !== 'login') {
    return { name: 'login' }
  }
  if (token && to.name === 'login') {
    return { path: '/' }
  }
})

export default router
