<template>
  <div class="module-container">
    <HiForm :controller="newFormController" />
  </div>
</template>

<script setup>
import HiForm from '@/components/hiForm/HiForm.vue'
import { newFormController } from './pageConfig.ts'
import { useRouter } from 'vue-router'
import { DataDictionaryAdd } from '@/api/dataDictionary.ts'

const router = useRouter()

newFormController.onDefaultConfirm(async (controller) => {
  const formData = await newFormController.validate()
  try {
    await DataDictionaryAdd(formData)
    router.push({ name: 'dataDictionaryList' })
  } finally {
    controller.hideLoading()
  }
})
newFormController.onDefaultCancel(() => {
  router.push({ name: 'dataDictionaryList' })
})
</script>

<style scoped lang="less"></style>
