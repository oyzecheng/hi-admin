<template>
  <a-drawer
    width="70%"
    :open="controller.pageDrawerOpen.value"
    :closable="false"
    :maskClosable="false"
    :maskStyle="{ backgroundColor: 'transparent' }"
    @close="handleClose"
  >
    <TopButton ref="topButtonRef" :controller="controller" />
    <template #footer>
      <HiButtonList :config-list="[drawerFooterCancel, drawerFooterConfirm]" />
    </template>
  </a-drawer>
</template>

<script setup lang="ts">
import HiButtonList from '@/components/hiButton/HiButtonList.vue'
import TopButton from '@/views/customPage/components/TopButton.vue'
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
  const buttonList = controller?.getTopButtonList()

  emits('onConfirm', { topButton: buttonList })
})
</script>

<style scoped lang="less"></style>
