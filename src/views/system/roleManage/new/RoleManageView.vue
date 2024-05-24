<template>
  <div class="module-container">
    <HiForm :controller="newFormController">
      <template #auth="{ formData, config }">
        <a-tree
          v-if="routerList.length"
          v-model:checkedKeys="formData[config.model]"
          :tree-data="routerList"
          show-icon
          checkable
          defaultExpandAll
          :field-names="{ title: 'pageTitle', key: 'id' }"
          :selectable="false"
        >
          <template #icon>
            <a-tag color="success" :bordered="false">页面</a-tag>
          </template>
        </a-tree>
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

<style scoped lang="less">
.module-container {
  :deep(.ant-tree) {
    .ant-tree-icon__customize {
      width: auto;
    }
  }
}
</style>
