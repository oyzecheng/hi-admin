<template>
  <a-input-number
    :value="value"
    @update:value="(val: number) => emits('update:value', val)"
    :addonAfter="addonAfter"
    :addonBefore="addonBefore"
    :autofocus="autofocus"
    :bordered="bordered"
    :controls="controls"
    :decimalSeparator="decimalSeparator"
    :disabled="disabled"
    :formatter="formatter"
    :keyboard="keyboard"
    :max="max"
    :min="min"
    :parser="parser"
    :precision="precision"
    :prefix="prefix"
    :size="size"
    :status="status"
    :step="step"
    :stringMode="stringMode"
    @change="onChange"
  />
</template>

<script setup lang="ts">
import { HiFormInputNumberController } from '@/components/hiForm/controller/hiFormInputNumberController.js'
import { toRefs } from 'vue'

const props = defineProps({
  controller: {
    type: HiFormInputNumberController,
    required: true
  },
  value: {
    type: Number
  }
})

const emits = defineEmits(['update:value'])
const { controller, value } = toRefs(props)
const config = controller.value?.getConfig()
const {
  addonAfter,
  addonBefore,
  autofocus,
  bordered,
  controls,
  decimalSeparator,
  disabled,
  formatter,
  keyboard,
  max,
  min,
  parser,
  precision,
  prefix,
  size,
  status,
  step,
  stringMode,
  onChange
} = config
</script>

<style scoped lang="less"></style>
