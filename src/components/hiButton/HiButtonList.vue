<template>
  <a-space>
    <component
      :is="setComponent(config)"
      v-for="config in configList"
      :key="config.key"
      :controller="config"
      :click-params="clickParams"
    />
  </a-space>
</template>

<script lang="ts" setup>
import HiButton from '@/components/hiButton/HiButton.vue'
import HIPopConfirmButton from '@/components/hiButton/HIPopConfirmButton.vue'
import type { TButtonController } from '@/components/hiButton/types'

const props = defineProps({
  configList: {
    type: Array<TButtonController>,
    required: true
  },
  clickParams: {
    type: Object,
    default: null
  }
})

const { configList, clickParams } = props

const setComponent = (controller: TButtonController) => {
  return controller.type === 'popConfirmButton' ? HIPopConfirmButton : HiButton
}
</script>

<style scoped></style>
