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
        <template v-if="column.dataIndex === 'status'">
          <a-tag :bordered="false" color="success">{{ record.status }}</a-tag>
        </template>
      </template>
    </HiPage>
  </div>
</template>

<script setup>
import HiPage from '@/components/hiPage/HiPage.vue'
import { newButton, show, edit, table, searchForm } from './pageConfig.ts'
import { useRouter } from 'vue-router'

const router = useRouter()

const loadData = (params) => {
  console.log(params)
  return new Promise((resolve) => {
    const { page = 1, pageSize = 10 } = params
    resolve({
      data: {
        page,
        pageSize,
        count: 89,
        list: new Array(pageSize).fill('').map((_, index) => ({
          id: (page - 1) * pageSize + index + 1 + '',
          name: '张三',
          avatar: 'https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_17.jpg',
          email: 'oouzc@gmail.com',
          role: '管理员',
          status: '启用'
        }))
      }
    })
  })
}
table.setLoadData(loadData)

show.onClick((controller) => {
  const { record } = controller.clickParams
  router.push({ name: 'userDetail', params: { id: 123 } })
})

edit.onClick(() => {
  router.push({ name: 'userNew' })
})

newButton.onClick(() => {
  router.push({ name: 'userNew' })
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
