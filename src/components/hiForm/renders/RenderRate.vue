<template>
  <a-rate
    :value="value"
    @update:value="(val: number) => emits('update:value', val)"
    :allowClear="allowClear"
    :allowHalf="allowHalf"
    :autofocus="autofocus"
    :character="character"
    :count="count"
    :disabled="disabled"
    :tooltips="tooltips"
    @change="onChange"
  />
</template>

<script setup lang="ts">
import { HiFormRateController } from '@/components/hiForm/controller/hiFormRateController.js'
import { toRefs } from 'vue'

const props = defineProps({
  controller: {
    type: HiFormRateController,
    required: true
  },
  value: {
    type: Number
  }
})

const emits = defineEmits(['update:value'])
const { controller, value } = toRefs(props)
const config = controller.value?.getConfig()
const { allowClear, allowHalf, autofocus, character, count, disabled, tooltips, onChange } = config
</script>

<style scoped lang="less"></style>
