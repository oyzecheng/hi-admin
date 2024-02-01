<template>
  <div class="module-container">
    <HiForm :controller="newFormController" />
  </div>
</template>

<script setup lang="ts">
import HiForm from '@/components/hiForm/HiForm.vue'
import { newFormController } from './pageConfig'
import { useRoute, useRouter } from 'vue-router'
import { RouterAdd, RouterDetail, RouterUpdate } from '@/api/router'
import { useUserStore } from '@/stores/user'
import { computed, onMounted } from 'vue'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const isEdit = computed(() => route.name === 'routerManageEdit')

onMounted(() => {
  if (isEdit.value) {
    getDetail()
  }
})

const getDetail = async () => {
  const result = await RouterDetail(route.params.id)
  newFormController.setFormData(result)
}

newFormController.onDefaultConfirm(async (controller) => {
  const formData = await newFormController.validate()
  controller.showLoading()
  if (isEdit.value) {
    await RouterUpdate(route.params.id, formData)
  } else {
    await RouterAdd(formData)
  }
  await userStore.getUserRoutes()
  router.push({ name: 'routerManage' })
  controller.hideLoading()
})
newFormController.onDefaultCancel(() => {
  router.push({ name: 'routerManage' })
})
</script>

<style scoped lang="less"></style>
