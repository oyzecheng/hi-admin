<template>
  <a-drawer
    width="400px"
    :closable="false"
    :open="controller.itemDrawerOpen.value"
    :maskStyle="{ backgroundColor: 'transparent' }"
    @close="controller.closeItemDrawer()"
  >
    <ButtonSetting :button-config="controller.currentEditItem" />
  </a-drawer>
</template>

<script setup lang="ts">
import ButtonSetting from '@/views/customPage/components/ButtonSetting.vue'
import { CustomPageController } from '@/views/customPage/controller/customPageController'

const props = defineProps({
  controller: {
    type: CustomPageController,
    required: true
  }
})

const { controller } = props
</script>

<style scoped lang="less"></style>
