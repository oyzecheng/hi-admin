<template>
  <div class="user-view">
    <HiPage
      :table-controller="table"
      :search-form-controller="form"
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
import { useHiTable } from '@/components/hiTable/hooks/useHiTable.ts'
import { useDic } from '@/components/hiDic/index.ts'
import { useFormInput, useFormSelect, useHiForm } from '@/components/hiForm/index.ts'
import { useHiButton } from '@/components/hiButton/index.ts'
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

const show = useHiButton('查看', { size: 'small', type: 'text' })
show.onClick((controller) => {
  const { record } = controller.clickParams
  controller.showLoading()
  console.log('record', record)
  controller.hideLoading()
})
const edit = useHiButton('编辑', { size: 'small', type: 'text' })
const del = useHiButton('删除', { size: 'small', type: 'text', danger: true })
const table = useHiTable(
  loadData,
  [
    { title: '名称', key: 'name' },
    { title: '角色', key: 'role' },
    { title: '状态', key: 'status' },
    {
      title: 'action',
      key: 'action',
      width: 200,
      buttonConfigList: [show, edit, del]
    }
  ],
  { selection: true }
)

const selectChildren = useDic([
  { label: 'test', value: 'test' },
  { label: 'test2', value: 'test2' }
])

const input = useFormInput('名称', 'input', {
  disabled: false
})
const select = useFormSelect('状态', 'select', {
  children: selectChildren
})
const form = useHiForm([input, select], { layout: 'inline' })

const newButton = useHiButton('新建', { type: 'primary' })
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
    .name {
      font-weight: 500;
    }
    .email {
      color: var(--color-content-text);
    }
  }
}
</style>
