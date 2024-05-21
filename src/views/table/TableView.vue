<template>
  <div class="table-view module-container">
    <HiTable :controller="table">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'name'"> custom {{ record.name }} </template>
      </template>
    </HiTable>
  </div>
</template>

<script setup>
import HiTable from '@/components/hiTable/HiTable.vue'
import { useHiButton, useHiSmallPrimaryGhostButton } from '@/components/hiButton/index.ts'
import { useHiTable } from '@/components/hiTable/hooks/useHiTable.ts'
import { useDelPopConfirmButton } from '@/components/hiButton/hooks/usePopConfirmButton.ts'

const loadData = () => {
  return new Promise((resolve) => {
    resolve({
      data: {
        page: 1,
        pageSize: 10,
        count: 4,
        list: [
          { id: 1, name: '张三', age: '22', email: 'test@test.com' },
          { id: 2, name: '李四', age: '22', email: 'test@test.com' },
          { id: 3, name: '王五', age: '22', email: 'test@test.com' },
          { id: 4, name: '赵六', age: '22', email: 'mtest@test.com' }
        ]
      }
    })
  })
}
const show = useHiSmallPrimaryGhostButton('查看')
const edit = useHiSmallPrimaryGhostButton('编辑')
const del = useDelPopConfirmButton(useHiButton('删除', { size: 'small', danger: true }))
const table = useHiTable(
  [
    { title: '姓名', key: 'name' },
    { title: '年龄', key: 'age' },
    { title: '邮箱', key: 'email' },
    {
      title: '操作',
      key: 'action',
      width: 200,
      buttonConfigList: [show, edit, del]
    }
  ],
  {},
  loadData
)

show.onClick(async (controller) => {
  const { record } = controller.clickParams
  controller.showLoading()
  await new Promise((resolve) => {
    setTimeout(() => resolve(record), 1000)
  })
  controller.hideLoading()
})
</script>

<style scoped></style>
