<template>
  <HiPage :table-controller="tableController" :top-button-controller="[topCreateRouter]">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'icon'"><component :is="renderIcon(record)" /></template>
      <template v-if="column.key === 'hidden'">
        <a-switch
          v-if="userStore.validateButtonAuth('routerManage.71a89e7b993f4817')"
          checked-children="显示"
          un-checked-children="隐藏"
          :checked="record.hidden !== true"
          :loading="record.loading"
          @update:checked="(val: any) => handleChangeSwitch(val, record)"
        />
        <span v-else>{{ record.hidden ? '隐藏' : '显示' }}</span>
      </template>
      <template v-if="column.key === 'buttons'">
        <div class="buttons">
          <a-space :size="8" wrap>
            <a-tooltip v-for="button in record.buttons || []" :key="button.key">
              <template #title> auth: {{ button.key }} </template>
              <a-tag color="success" @click="handleCopy(button.key)">
                {{ button.name }}
              </a-tag>
            </a-tooltip>
          </a-space>
        </div>
      </template>
    </template>
  </HiPage>
</template>

<script setup lang="ts">
import HiPage from '@/components/hiPage/HiPage.vue'
import { tableController, delRouter, topCreateRouter, editRouter } from './pageConfig'
import RouterIcon from '@/router/routerIcon'
import { useRouter } from 'vue-router'
import { type IRouter, RouterDelete, RouterList, RouterUpdate } from '@/api/router'
import { copyToClipboard } from '@/utils'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

tableController.setLoadData(RouterList)

const renderIcon = (record: any) => {
  const iconKey = record.meta?.icon as IRouter['routeIcon']
  const icon = iconKey ? RouterIcon[iconKey] : ''
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

const handleCopy = (auth: string) => {
  copyToClipboard(auth)
}
</script>

<style scoped lang="less">
.buttons {
  .ant-tag {
    margin-right: 0;
    cursor: pointer;
  }
}
</style>
