<template>
  <HiPage
    :search-form-controller="searchController"
    :table-controller="tableController"
    :top-button-controller="[topCreateRouter]"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'icon'"><component :is="renderIcon(record)" /></template>
      <template v-if="column.key === 'hidden'">
        <RenderSwitch :controller="routeSwitch" :value="record.hidden !== true" />
      </template>
    </template>
  </HiPage>
</template>

<script setup lang="ts">
import HiPage from '@/components/hiPage/HiPage.vue'
import {
  searchController,
  tableController,
  createRouter,
  delRouter,
  routeSwitch,
  topCreateRouter
} from './pageConfig'
import RouterIcon from '@/router/routerIcon'
import { useRouter } from 'vue-router'
import { RouterList } from '@/api/router'
import RenderSwitch from '@/components/hiForm/renders/RenderSwitch.vue'

const router = useRouter()

tableController.setLoadData(() => {
  return new Promise((resolve) => {
    RouterList().then((res) => {
      resolve({ data: { list: res.data, page: 1, pageSize: 10, count: 10 } })
    })
  })
})

const renderIcon = (record: any) => {
  const icon = RouterIcon[record.meta?.icon]
  return icon ? icon() : undefined
}

const goToRouterManageNew = () => {
  router.push({ name: 'routerManageNew' })
}
createRouter.onClick(goToRouterManageNew)
topCreateRouter.onClick(goToRouterManageNew)

delRouter.onConfirm(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 2000)
  })
})
</script>

<style scoped lang="less"></style>
