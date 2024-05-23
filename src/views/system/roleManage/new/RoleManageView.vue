<template>
  <div class="module-container">
    <HiForm :controller="newFormController"></HiForm>
  </div>
</template>

<script setup lang="ts">
import HiForm from '@/components/hiForm/HiForm.vue'
import { newFormController } from './pageConfig'
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { RoleManageDetail, RoleManageAdd, RoleManageUpdate } from '@/api/role'

const route = useRoute()
const router = useRouter()

onMounted(() => {
  if (isEdit.value) {
    getDetail()
  }
})

const isEdit = computed(() => route.name === 'roleManageEdit')

const getDetail = async () => {
  const { data } = await RoleManageDetail(route.params.id)
  newFormController.setFormData(data)
}

newFormController.onDefaultConfirm(async (controller) => {
  const formData = await newFormController.validate()
  controller.showLoading()
  try {
    if (isEdit.value) {
      await RoleManageUpdate(route.params.id, formData)
    } else {
      await RoleManageAdd(formData)
    }
    router.push({ name: 'roleManage' })
  } finally {
    controller.hideLoading()
  }
})
newFormController.onDefaultCancel(() => {
  router.replace({ name: 'roleManage' })
})
</script>

<style scoped></style>
