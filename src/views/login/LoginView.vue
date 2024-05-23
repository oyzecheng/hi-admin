<template>
  <div class="login">
    <a-row align="middle" style="height: 100%">
      <a-col :span="0" :lg="{ span: 12 }" :xl="{ span: 15 }">
        <div class="background-image">
          <img src="../../assets/images/illustration_dashboard.png" alt="" />
        </div>
      </a-col>
      <a-col :span="24" :lg="{ span: 12 }" :xl="{ span: 9 }" style="height: 100%">
        <div class="container">
          <a-row>
            <a-col :span="24" :lg="0">
              <div class="background-image">
                <img src="../../assets/images/illustration_dashboard.png" alt="" />
              </div>
            </a-col>
          </a-row>
          <h6 class="title">登陆</h6>
          <HiForm :controller="loginForm" :button-config="null" />
          <HiButton :controller="loginButton" />
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import HiForm from '@/components/hiForm/HiForm.vue'
import HiButton from '@/components/hiButton/HiButton.vue'
import { loginForm, loginButton, email, password } from './pageConfig'
import { SetItem } from '@/utils/storage'
import { USER_TOKEN } from '@/constant/user'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { Login } from '@/api/user'

const userStore = useUserStore()
const router = useRouter()

const handleLogin = async () => {
  loginButton.showLoading()
  try {
    const formData = await loginForm.validate()
    const result = await Login(formData)
    SetItem(USER_TOKEN, result)
    await userStore.initUserConfig()
    router.push({ name: 'home' })
  } finally {
    loginButton.hideLoading()
  }
}

loginButton.onClick(handleLogin)
email.setConfigItemByKey('onPressEnter', handleLogin)
password.setConfigItemByKey('onPressEnter', handleLogin)
</script>

<style lang="less" scoped>
.login {
  //display: flex;
  //justify-content: space-between;
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
    width: 100%;
    min-height: 100%;
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
