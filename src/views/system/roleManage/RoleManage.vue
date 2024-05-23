<template>
  <HiPage :table-controller="tableController" :top-button-controller="[topCreateRole]">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'status'">
        <a-switch
          checked-children="启用"
          un-checked-children="禁用"
          :checked="record.status === 1"
          :loading="record.loading"
          @update:checked="(val: any) => handleChangeSwitch(val, record)"
        />
      </template>
    </template>
  </HiPage>
</template>

<script setup lang="ts">
import HiPage from '@/components/hiPage/HiPage.vue'
import { topCreateRole, tableController, delRole, editRole } from './pageConfig'
import { RoleManageList, RoleManageUpdate, RoleManageDelete } from '@/api/role'
import { useRouter } from 'vue-router'

tableController.setLoadData(RoleManageList)

const router = useRouter()

topCreateRole.onClick(() => {
  router.push({ name: 'roleManageNew' })
})

editRole.onClick((controller) => {
  const { record } = controller.clickParams
  router.push({ name: 'roleManageEdit', params: { id: record.id } })
})

delRole.onConfirm(async (controller) => {
  const { record } = controller.clickParams
  await RoleManageDelete(record.id)
  tableController.reloadData()
})

const handleChangeSwitch = (val: boolean, record: any) => {
  record.loading = true
  RoleManageUpdate(record.id, { id: record.id, status: val ? 1 : 2 })
    .then(() => {
      tableController.reloadData()
    })
    .finally(() => {
      record.loading = false
    })
}
</script>

<style scoped></style>
