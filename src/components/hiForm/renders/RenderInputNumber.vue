<template>
  <a-input-number
    v-model:value="formData[controller.model]"
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
import type { PropType } from 'vue'
import type { TFormData } from '@/components/hiForm/types'

const props = defineProps({
  controller: {
    type: HiFormInputNumberController,
    required: true
  },
  formData: {
    type: Object as PropType<TFormData>,
    required: true
  }
})

const { controller, formData } = props
const config = controller?.getConfig()
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
