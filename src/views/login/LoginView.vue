<template>
  <div :class="{ login: true, 'lg-login': appStore.isLgLayout }">
    <div class="background-image">
      <img src="../../assets/images/illustration_dashboard.png" alt="" />
    </div>
    <div class="container">
      <h6 class="title">登陆</h6>
      <HiForm :controller="loginForm" :button-config="null" />
      <HiButton :controller="loginButton" />
    </div>
  </div>
</template>

<script setup lang="ts">
import HiForm from '@/components/hiForm/HiForm.vue'
import HiButton from '@/components/hiButton/HiButton.vue'
import { loginForm, loginButton } from './pageConfig'
import { SetItem } from '@/utils/storage'
import { USER_TOKEN } from '@/constant/user'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const userStore = useUserStore()
const router = useRouter()

loginButton.onClick(async (button) => {
  button.showLoading()
  try {
    const formData = await loginForm.validate()
    console.log(formData)
    SetItem(USER_TOKEN, 'token')
    await userStore.initUserConfig()
    router.push({ name: 'home' })
  } finally {
    button.hideLoading()
  }
})
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: space-between;
  height: 100vh;
  background-color: #fbfcfb;
  .background-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
    img {
      width: 100%;
      max-width: 720px;
    }
  }
  .container {
    width: 500px;
    background-color: var(--color-background);
    padding: 40px 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      color: var(--color-text);
      font-weight: 500;
      font-size: 22px;
      margin-bottom: 20px;
    }
  }
}
</style>
