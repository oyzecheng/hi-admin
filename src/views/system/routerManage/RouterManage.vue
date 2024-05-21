<template>
  <HiPage :table-controller="tableController" :top-button-controller="[topCreateRouter]">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'icon'"><component :is="renderIcon(record)" /></template>
      <template v-if="column.key === 'hidden'">
        <a-switch
          checked-children="显示"
          un-checked-children="隐藏"
          :checked="record.hidden !== true"
          :loading="record.loading"
          @update:checked="(val: any) => handleChangeSwitch(val, record)"
        />
      </template>
    </template>
  </HiPage>
</template>

<script setup lang="ts">
import HiPage from '@/components/hiPage/HiPage.vue'
import { tableController, delRouter, topCreateRouter, editRouter } from './pageConfig'
import RouterIcon from '@/router/routerIcon'
import { useRouter } from 'vue-router'
import { RouterDelete, RouterList, RouterUpdate } from '@/api/router'

const router = useRouter()

tableController.setLoadData(() => {
  return new Promise((resolve) => {
    RouterList().then((res) => {
      resolve({ data: { list: appendLoading(res.data), page: 1, pageSize: 10, count: 10 } })
    })
  })
})

const appendLoading = (list: any[]) => {
  list.forEach((item) => {
    item.loading = false
    if (item.children) {
      appendLoading(item.children)
    }
  })
  return list
}

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
  record.loading = true
  try {
    await RouterUpdate(record.id, { hidden: !val })
    record.hidden = !val
  } finally {
    record.loading = false
  }
}
</script>

<style scoped lang="less"></style>
