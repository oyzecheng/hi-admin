<template>
  <a-range-picker
    :value="value"
    @update:value="(val: any[]) => emits('update:value', val)"
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
import { toRefs } from 'vue'

const props = defineProps({
  controller: {
    type: HiFormDateRangePickerController,
    required: true
  },
  value: {
    type: Array
  }
})

const emits = defineEmits(['update:value'])
const { controller, value } = toRefs(props)
const config = controller.value?.getConfig()
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
