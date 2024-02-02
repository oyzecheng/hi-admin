<template>
  <SettingDrawerModule title="表格">
    <CustomContainer>
      <HiTable :controller="customTableController" />
    </CustomContainer>
    <HiButtonList :config-list="[createColumn, createOperator]" />
  </SettingDrawerModule>
</template>

<script setup>
import HiTable from '@/components/hiTable/HiTable.vue'
import HiButtonList from '@/components/hiButton/HiButtonList.vue'
import CustomContainer from '@/views/customPage/components/CustomContainer.vue'
import SettingDrawerModule from '@/layout/components/SettingDrawerModule.vue'
import { useHiTable } from '@/components/hiTable/hooks/useHiTable.ts'
import { useHiButton } from '@/components/hiButton/index.ts'
import { reactive } from 'vue'

const columnsList = reactive([])
const customTableController = useHiTable(columnsList, { pagination: false })
const createColumn = useHiButton('创建列表列')
const createOperator = useHiButton('创建列表操作按钮')

customTableController.setLoadData(() => {
  return new Promise((resolve) => {
    resolve({ data: { page: 1, pageSize: 10, count: 1, list: [{ id: 1, name: ' testName' }] } })
  })
})

createColumn.onClick(() => {
  columnsList.push({ title: 'aa', key: 'aa' })
})
</script>

<style scoped lang="less"></style>
