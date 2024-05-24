<template>
  <div class="module-container">
    <HiForm :controller="newFormController">
      <template #auth="{ formData, config }">
        <a-tree
          v-model:checkedKeys="formData[config.model]"
          :tree-data="routerList"
          :autoExpandParent="true"
          checkable
          :field-names="{ title: 'pageTitle', key: 'id' }"
        ></a-tree>
      </template>
    </HiForm>
  </div>
</template>

<script setup lang="ts">
import HiForm from '@/components/hiForm/HiForm.vue'
import { newFormController } from './pageConfig'
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { RoleManageDetail, RoleManageAdd, RoleManageUpdate } from '@/api/role'
import { RouterList } from '@/api/router'

const route = useRoute()
const router = useRouter()
const routerList = ref([])

onMounted(() => {
  getRouterList()
  if (isEdit.value) {
    getDetail()
  }
})

const isEdit = computed(() => route.name === 'roleManageEdit')

const getDetail = async () => {
  const { data } = await RoleManageDetail(route.params.id)
  newFormController.setFormData(data)
}

const getRouterList = async () => {
  const { data } = await RouterList()
  routerList.value = data
  console.log('data', data)
}

newFormController.onDefaultConfirm(async (controller) => {
  const formData = await newFormController.validate()
  console.log('formData', formData)
  return
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
