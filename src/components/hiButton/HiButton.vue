<template>
  <a-button
    v-if="isShow"
    @click="config.click"
    :loading="loading"
    :disabled="disabled"
    :block="block"
    :danger="danger"
    :type="type"
    :ghost="ghost"
    :href="href"
    :html-type="htmlType"
    :icon="icon"
    :shape="shape"
    :size="size"
    :target="target"
  >
    {{ label }}
  </a-button>
</template>

<script lang="ts" setup>
import { HiButtonController } from '@/components/hiButton/controller/hiButtonController'
const props = defineProps({
  config: {
    type: HiButtonController,
    required: true
  }
})

const config = props.config
const buttonConfig = config?.getConfig()
const {
  label,
  loading,
  disabled,
  block,
  danger,
  ghost,
  href,
  htmlType,
  icon,
  shape,
  size,
  target,
  type,
  isShow
} = buttonConfig
</script>

<style scoped></style>
