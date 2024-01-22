<template>
  <a-popconfirm
    :title="title"
    :cancelText="cancelText"
    :disabled="disabled"
    :icon="icon"
    :okText="okText"
    :okType="okType"
    :showCancel="showCancel"
    :description="description"
    @confirm="controller.confirm"
    @onCancel="controller.cancel"
  >
    <HiButton :controller="controller.buttonController" />
  </a-popconfirm>
</template>

<script setup lang="ts">
import HiButton from '@/components/hiButton/HiButton.vue'
import { HiPopConfirmButtonController } from '@/components/hiButton/controller/hiPopConfirmButtonController'

const props = defineProps({
  controller: {
    type: HiPopConfirmButtonController,
    required: true
  }
})

const { controller } = props
const { title, cancelText, disabled, icon, okText, okType, showCancel, description } =
  controller.getPopConfirmConfig()
</script>

<style scoped lang="less"></style>
