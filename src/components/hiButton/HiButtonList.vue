<template>
  <a-space>
    <hi-button v-for="config in configList" :key="config.key" :config="config"></hi-button>
  </a-space>
</template>

<script lang="ts" setup>
import HiButton from '@/components/hiButton/HiButton.vue'
import type { HiButtonController } from '@/components/hiButton/controller/hiButtonController'

const props = defineProps({
  configList: {
    type: Array<HiButtonController>,
    required: true
  }
})

const { configList } = props
</script>

<style scoped></style>
