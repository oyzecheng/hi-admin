<template>
  <div class="module-container">
    <HiForm :controller="newFormController" />
  </div>
</template>

<script setup lang="ts">
import HiForm from '@/components/hiForm/HiForm.vue'
import { newFormController } from './pageConfig'
import { useRouter } from 'vue-router'
import { RouterAdd } from '@/api/router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

newFormController.onDefaultConfirm(async (controller) => {
  const formData = await newFormController.validate()
  controller.showLoading()
  await RouterAdd(formData)
  await userStore.getUserRoutes()
  router.push({ name: 'routerManage' })
  controller.hideLoading()
})
newFormController.onDefaultCancel(() => {
  router.push({ name: 'routerManage' })
})
</script>

<style scoped lang="less"></style>
