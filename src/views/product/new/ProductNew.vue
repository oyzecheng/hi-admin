<template>
  <div class="module-container">
    <HiForm :controller="formController"></HiForm>
  </div>
</template>

<script setup lang="ts">
import HiForm from '@/components/hiForm/HiForm.vue'
import { useRouter, useRoute } from 'vue-router'
import { formController } from './pageConfig'
import { ProductAdd, ProductUpdate, ProductDetail } from '@/api/product'
import { computed, onMounted } from 'vue'
import { getParamsId } from '@/utils'

const router = useRouter()
const route = useRoute()

onMounted(() => {
  if (isEdit.value) {
    getDetail()
  }
})

const isEdit = computed(() => route.params.id)

const getDetail = async () => {
  const { data } = await ProductDetail(getParamsId(route))
  formController.setFormData(data)
}

formController.onDefaultConfirm(async (buttonController) => {
  const formData = await formController.validate()
  buttonController.showLoading()
  try {
    if (isEdit.value) {
      await ProductUpdate(getParamsId(route), formData)
    } else {
      await ProductAdd(formData)
    }
    router.push({ name: 'productList' })
  } finally {
    buttonController.hideLoading()
  }
})
formController.onDefaultCancel(() => {
  router.replace({ name: 'productList' })
})
</script>

<style scoped></style>
