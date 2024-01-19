<template>
  <HiPage :search-form-controller="searchController" :table-controller="tableController">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'icon'"><component :is="renderIcon(record)" /></template>
    </template>
  </HiPage>
</template>

<script setup lang="ts">
import HiPage from '@/components/hiPage/HiPage.vue'
import { searchController, tableController } from './pageConfig'
import { privateRoutes } from '@/router/routes'
import RouterIcon from '@/router/routerIcon'

tableController.setLoadData(() => {
  return new Promise((resolve) => {
    resolve({
      data: { list: [...privateRoutes], page: 1, count: 200, pageSize: 10 }
    })
  })
})

const renderIcon = (record: any) => {
  const icon = RouterIcon[record.meta?.icon]
  return icon ? icon() : undefined
}
</script>

<style scoped lang="less"></style>
