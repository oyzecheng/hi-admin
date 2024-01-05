<template>
  <div class="table-view">
    <HiTable :controller="table">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'one'"> custom {{ record.one }} </template>
      </template>
    </HiTable>
  </div>
</template>

<script setup>
import HiTable from '@/components/hiTable/HiTable.vue'
import { useHiButton } from '@/components/hiButton/index.ts'
import { useHiTable } from '@/components/hiTable/hooks/useHiTable.ts'

const loadData = () => {
  return new Promise((resolve) => {
    resolve({
      data: {
        page: 1,
        pageSize: 10,
        count: 89,
        list: [
          { id: 1, one: '张三', two: '22', three: 'man' },
          { id: 2, one: '里斯', two: '22', three: 'man' },
          { id: 3, one: '王五', two: '22', three: 'man' },
          { id: 4, one: '赵六', two: '22', three: 'man' }
        ]
      }
    })
  })
}
const show = useHiButton('show', { size: 'small', type: 'primary', ghost: true })
show.onClick((controller, { record }) => {
  controller.showLoading()
  console.log('record', record)
  controller.hideLoading()
})
const edit = useHiButton('edit', { size: 'small', type: 'primary', ghost: true })
const del = useHiButton('del', { size: 'small', danger: true })
const table = useHiTable(
  [
    { title: 'one', key: 'one' },
    { title: 'two', key: 'two' },
    { title: 'three', key: 'three' },
    {
      title: 'action',
      key: 'action',
      width: 200,
      buttonConfigList: [show, edit, del]
    }
  ],
  {},
  loadData
)
</script>

<style scoped></style>
