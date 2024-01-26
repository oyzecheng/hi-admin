import './assets/main.css'
import './assets/antdOverrite.less'

import './mock'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useUserStore } from '@/stores/user'
import { GetItem } from '@/utils/storage'
import { USER_TOKEN } from '@/constant/user'

import useAntd from '@/plugins/antd'

import App from './App.vue'
import router from './router'

const app = createApp(App)

useAntd(app)
app.use(createPinia())
app.use(router)

const userStore = useUserStore()
if (GetItem(USER_TOKEN) && !userStore.info.userInfo) {
  userStore.initUserConfig()
}

app.mount('#app')
