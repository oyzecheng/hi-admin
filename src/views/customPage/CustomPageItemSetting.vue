<template>
  <a-drawer
    width="400px"
    :closable="false"
    :open="controller.itemDrawerOpen.value"
    :maskStyle="{ backgroundColor: 'transparent' }"
    @close="controller.closeItemDrawer()"
  >
    <component :is="renderComponent" :config="controller.currentEditItem" />
  </a-drawer>
</template>

<script setup lang="ts">
import ButtonSetting from '@/views/customPage/components/ButtonSetting.vue'
import FormItemSetting from '@/views/customPage/components/FormItemSetting.vue'
import { CustomPageController } from '@/views/customPage/controller/customPageController'
import { computed } from 'vue'

const props = defineProps({
  controller: {
    type: CustomPageController,
    required: true
  }
})

const { controller } = props

const renderComponent = computed(() => {
  switch (controller?.currentEditItemType.value) {
    case 'button':
      return ButtonSetting
    case 'formItem':
      return FormItemSetting
  }
  return {}
})
</script>

<style scoped lang="less"></style>
