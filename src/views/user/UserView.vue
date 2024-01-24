<template>
  <div class="user-view">
    <HiPage
      :table-controller="table"
      :search-form-controller="searchForm"
      :top-button-controller="[newButton]"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'name'">
          <div class="user-name-box">
            <a-avatar size="large" :src="record.avatar" />
            <div>
              <p class="name">{{ record.name }}</p>
              <p class="email">{{ record.email }}</p>
            </div>
          </div>
        </template>
        <template v-if="column.dataIndex === 'role'">
          <a-tag :bordered="false" :color="record.role === 1 ? 'success' : 'blue'">
            {{ column.dic.getLabelByValue(record.role) }}
          </a-tag>
        </template>
        <template v-if="column.dataIndex === 'status'">
          <RenderSwitch
            :controller="statusSwitch"
            :form-data="record"
            v-model:value="record.status"
          />
        </template>
      </template>
    </HiPage>
  </div>
</template>

<script setup>
import HiPage from '@/components/hiPage/HiPage.vue'
import RenderSwitch from '@/components/hiForm/renders/RenderSwitch.vue'
import { newButton, show, edit, table, searchForm, statusSwitch, del } from './pageConfig.ts'
import { useRouter } from 'vue-router'
import { UserManageList, UserManageDelete } from '@/api/userManage.ts'

const router = useRouter()

const loadData = (params) => {
  console.log(params)
  return UserManageList(params)
}
table.setLoadData(loadData)

show.onClick((controller) => {
  const { record } = controller.clickParams
  router.push({ name: 'userDetail', params: { id: record.id } })
})

edit.onClick((controller) => {
  const { record } = controller.clickParams
  router.push({ name: 'userEdit', params: { id: record.id } })
})

newButton.onClick(() => {
  router.push({ name: 'userNew' })
})

del.onConfirm(async (controller) => {
  const { record } = controller.clickParams
  await UserManageDelete(record.id)
  table.reloadData()
})
</script>

<style scoped lang="less">
.user-view {
  .user-name-box {
    display: flex;
    align-items: center;
    gap: 10px;
    .ant-avatar {
      min-width: 38px;
    }
    .name {
      font-weight: 500;
    }
    .email {
      color: var(--color-content-text);
    }
  }
}
</style>
