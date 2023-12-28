<template>
  <a-space>
    <hi-button v-for="config in configList" :key="config.key" :config="config"></hi-button>
  </a-space>
</template>

<script lang="ts" setup>
import HiButton from '@/components/hiButton/HiButton.vue'
import type { HiButtonController } from '@/components/hiButton/controller/hiButtonController'
import { onMounted, watch } from 'vue'

const props = defineProps({
  configList: {
    type: Array<HiButtonController>,
    required: true
  },
  clickParams: {
    type: Object,
    default: null
  }
})

const { configList, clickParams } = props

onMounted(() => {
  setClickParams(clickParams)
})
watch(
  () => clickParams,
  (value) => setClickParams(value),
  { deep: true }
)

const setClickParams = (params: any) => {
  configList?.forEach((item) => {
    item.setClickParams(params)
  })
}
</script>

<style scoped></style>
