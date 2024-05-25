<template>
  <div class="module-container">
    <HiForm :controller="newFormController" />
  </div>
</template>

<script setup lang="ts">
import HiForm from '@/components/hiForm/HiForm.vue'
import { newFormController } from './pageConfig'
import { useRoute, useRouter } from 'vue-router'
import { DataDictionaryAdd, DataDictionaryDetail, DataDictionaryUpdate } from '@/api/dataDictionary'
import { computed, onMounted } from 'vue'
import { getParamsId } from '@/utils'

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
      ? await DataDictionaryUpdate(getParamsId(route), formData)
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
  const data = await DataDictionaryDetail(getParamsId(route))
  newFormController.setFormData(data)
}
</script>

<style scoped lang="less"></style>
