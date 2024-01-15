<template>
  <div class="login">
    <div>
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
</script>

<style lang="less" scoped>
.login {
  display: flex;
  height: 100vh;
  .container {
    width: 400px;
    background-color: var(--color-background);
    padding: 40px;
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
