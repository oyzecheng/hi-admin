<template>
  <a-button
    v-if="validateButtonAuth() && isShow"
    @click="handleButtonClick"
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
    :class="className"
  >
    {{ label }}
  </a-button>
</template>

<script lang="ts" setup>
import { HiButtonController } from '@/components/hiButton/controller/hiButtonController'
import { useUserStore } from '@/stores/user'

const props = defineProps({
  controller: {
    type: HiButtonController,
    required: true
  },
  clickParams: {
    type: Object,
    default: null
  }
})

const userStore = useUserStore()

const { controller, clickParams } = props
const buttonConfig = controller?.getConfig()
const {
  className,
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
  isShow,
  auth
} = buttonConfig

const validateButtonAuth = () => {
  return auth ? userStore.validateButtonAuth(auth) : true
}

const handleButtonClick = () => {
  controller?.setClickParams(clickParams)
  controller?.click?.()
}
</script>

<style scoped></style>
