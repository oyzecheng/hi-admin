<template>
  <a-range-picker
    v-model:value="formData[controller.model]"
    :allowClear="allowClear"
    :autofocus="autofocus"
    :bordered="bordered"
    :disabled="disabled"
    :disabledDate="disabledDate"
    :format="format"
    :inputReadOnly="inputReadOnly"
    :mode="mode"
    :open="open"
    :picker="picker"
    :placeholder="placeholder"
    :presets="presets"
    :size="size"
    :status="status"
    :allowEmpty="allowEmpty"
    :disabledTime="disabledTime"
    :ranges="ranges"
    :separator="separator"
    :showTime="showTime"
    @change="onChange"
  />
</template>

<script setup lang="ts">
import { HiFormDateRangePickerController } from '@/components/hiForm/controller/hiFormDateRangePickerController'
import type { PropType } from 'vue'
import type { TFormData } from '@/components/hiForm/types'

const props = defineProps({
  controller: {
    type: HiFormDateRangePickerController,
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
  allowClear,
  autofocus,
  bordered,
  disabled,
  disabledDate,
  format,
  inputReadOnly,
  mode,
  open,
  picker,
  placeholder,
  presets,
  size,
  status,
  allowEmpty,
  disabledTime,
  ranges,
  separator,
  showTime,
  onChange
} = config
</script>

<style scoped lang="less"></style>
