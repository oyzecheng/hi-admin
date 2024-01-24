<template>
  <a-date-picker
    :value="value"
    @update:value="(val: any) => emits('update:value', val)"
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
    :disabledTime="disabledTime"
    :showNow="showNow"
    :showTime="showTime"
    :showToday="showToday"
    @change="onChange"
  />
</template>

<script setup lang="ts">
import { HiFormDatePickerController } from '@/components/hiForm/controller/hiFormDatePickerController'
import { toRefs } from 'vue'

const props = defineProps({
  controller: {
    type: HiFormDatePickerController,
    required: true
  },
  value: {
    type: [Object, String]
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
  disabledTime,
  showNow,
  showTime,
  showToday,
  onChange
} = config
</script>

<style scoped lang="less"></style>
