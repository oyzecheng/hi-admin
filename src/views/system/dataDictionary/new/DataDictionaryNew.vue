<template>
  <div class="module-container">
    <HiForm :controller="newFormController" />
  </div>
</template>

<script setup>
import HiForm from '@/components/hiForm/HiForm.vue'
import { newFormController } from './pageConfig.ts'
import { useRoute, useRouter } from 'vue-router'
import {
  DataDictionaryAdd,
  DataDictionaryDetail,
  DataDictionaryUpdate
} from '@/api/dataDictionary.ts'
import { computed, onMounted } from 'vue'

const router = useRouter()
const route = useRoute()

const isEdit = computed(() => {
  return route.name === 'dataDictionaryEdit'
})

onMounted(() => {
  if (isEdit.value) {
    getDetail()
  }
})

newFormController.onDefaultConfirm(async (controller) => {
  const formData = await newFormController.validate()
  try {
    controller.showLoading()
    isEdit.value
      ? await DataDictionaryUpdate(route.params.id, formData)
      : await DataDictionaryAdd(formData)
    router.push({ name: 'dataDictionaryList' })
  } finally {
    controller.hideLoading()
  }
})
newFormController.onDefaultCancel(() => {
  router.push({ name: 'dataDictionaryList' })
})

const getDetail = async () => {
  const data = await DataDictionaryDetail(route.params.id)
  newFormController.setFormData(data)
}
</script>

<style scoped lang="less"></style>
