<template>
  <HiPage :table-controller="tableController" :top-button-controller="[topCreateRouter]">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'icon'"><component :is="renderIcon(record)" /></template>
      <template v-if="column.key === 'hidden'">
        <RenderSwitch
          :controller="routeSwitch"
          :value="record.hidden !== true"
          @update:value="(val) => handleChangeSwitch(val, record)"
        />
      </template>
    </template>
  </HiPage>
</template>

<script setup lang="ts">
import HiPage from '@/components/hiPage/HiPage.vue'
import { tableController, delRouter, routeSwitch, topCreateRouter, editRouter } from './pageConfig'
import RouterIcon from '@/router/routerIcon'
import { useRouter } from 'vue-router'
import { RouterDelete, RouterList, RouterUpdate } from '@/api/router'
import RenderSwitch from '@/components/hiForm/renders/RenderSwitch.vue'

const router = useRouter()

tableController.setLoadData((params) => {
  return new Promise((resolve) => {
    RouterList(params).then((res) => {
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
topCreateRouter.onClick(goToRouterManageNew)

delRouter.onConfirm(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 2000)
  })
})

editRouter.onClick((controller) => {
  const { record } = controller.clickParams
  router.push({ name: 'routerManageEdit', params: { id: record.id } })
})

delRouter.onConfirm(async (controller) => {
  const { record } = controller.clickParams
  await RouterDelete(record.id)
  tableController.reloadData()
})

const handleChangeSwitch = async (val: boolean, record: any) => {
  routeSwitch.showLoading()
  try {
    await RouterUpdate(record.id, { hidden: !val })
    record.hidden = !val
  } finally {
    routeSwitch.hideLoading()
  }
}
</script>

<style scoped lang="less"></style>
