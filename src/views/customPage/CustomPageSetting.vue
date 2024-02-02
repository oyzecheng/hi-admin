<template>
  <a-drawer
    width="70%"
    :open="controller.pageDrawerOpen.value"
    :closable="false"
    :maskClosable="false"
    :maskStyle="{ backgroundColor: 'transparent' }"
    @close="handleClose"
  >
    <TopButton :controller="controller" />
    <TopFilter :controller="controller" />
    <CustomTable />
    <template #footer>
      <HiButtonList :config-list="[drawerFooterCancel, drawerFooterConfirm]" />
    </template>
  </a-drawer>
</template>

<script setup lang="ts">
import HiButtonList from '@/components/hiButton/HiButtonList.vue'
import TopButton from '@/views/customPage/components/TopButton.vue'
import TopFilter from '@/views/customPage/components/TopFilter.vue'
import CustomTable from '@/views/customPage/components/CustomTable.vue'
import { drawerFooterCancel, drawerFooterConfirm } from './pageConfig'
import { CustomPageController } from '@/views/customPage/controller/customPageController'

const props = defineProps({
  controller: {
    type: CustomPageController,
    required: true
  }
})

const { controller } = props
const emits = defineEmits(['onClose', 'onConfirm'])

const handleClose = () => {
  emits('onClose')
}

drawerFooterCancel.onClick(handleClose)
drawerFooterConfirm.onClick(() => {
  const { topButtonList, topFilterList } = controller.getPageConfig()

  emits('onConfirm', { topButtonList, topFilterList })
})
</script>

<style scoped lang="less"></style>
