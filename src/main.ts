import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import useAntd from "@/plugins/antd";

import App from './App.vue'
import router from './router'

const app = createApp(App)

useAntd(app)
app.use(createPinia())
app.use(router)

app.mount('#app')