<template>
  <div class="module-container">
    <HiForm :controller="newFormController" />
  </div>
</template>

<script setup lang="ts">
import HiForm from '@/components/hiForm/HiForm.vue'
import { newFormController } from './pageConfig'
import { useRouter } from 'vue-router'

const router = useRouter()

newFormController.onDefaultCancel(() => {
  router.push({ name: 'routerManage' })
})
</script>

<style scoped lang="less"></style>
