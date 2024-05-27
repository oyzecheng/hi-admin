<template>
  <div class="user-view">
    <HiPage
      :table-controller="table"
      :search-form-controller="searchForm"
      :top-button-controller="[newButton]"
      :selected-container-button-controllers="[batchDel]"
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
          <a-tag :bordered="false" :color="record.role === '1' ? 'success' : 'blue'">
            {{ column.dic.getLabelByValue(record.role) }}
          </a-tag>
        </template>
        <template v-if="column.dataIndex === 'status'">
          <a-switch
            v-if="userStore.validateButtonAuth('userListPage.f5f2de16471c790c')"
            :checked-value="1"
            :un-checked-value="2"
            checked-children="启用"
            un-checked-children="禁用"
            :checked="record.status"
            :loading="record.loading"
            @update:checked="(val: TStatus) => handleChangeStatus(val, record)"
          />
          <span v-else>{{ statusDic.getLabelByValue(record.status.toString()) }}</span>
        </template>
      </template>
    </HiPage>
  </div>
</template>

<script setup lang="ts">
import HiPage from '@/components/hiPage/HiPage.vue'
import { newButton, show, edit, table, searchForm, del, batchDel, statusDic } from './pageConfig'
import { useRouter } from 'vue-router'
import { UserManageList, UserManageDelete, UserManageUpdate } from '@/api/userManage'
import { Modal } from 'ant-design-vue'
import type { TParams, TStatus } from '@/api/types'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

const loadData = (params: TParams) => {
  return UserManageList(params)
}
table.setLoadData(loadData)
table.appendData({ loading: false })

const handleChangeStatus = async (val: TStatus, record: any) => {
  record.loading = true
  const { id } = record
  try {
    await UserManageUpdate(id, { status: val })
    record.status = val
  } finally {
    record.loading = false
  }
}

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

batchDel.onClick(() => {
  const { selectedRowKeys } = table.getSelectedData()
  Modal.confirm({
    content: '确定要删除选中的数据吗？',
    async onOk() {
      await UserManageDelete('', { ids: selectedRowKeys })
      table.reloadData()
      table.resetSelectedData()
    }
  })
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
