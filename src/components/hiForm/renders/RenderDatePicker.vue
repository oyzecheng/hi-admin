<template>
  <a-date-picker
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
    :disabledTime="disabledTime"
    :showNow="showNow"
    :showTime="showTime"
    :showToday="showToday"
    @change="onChange"
  />
</template>

<script setup lang="ts">
import { HiFormDatePickerController } from '@/components/hiForm/controller/hiFormDatePickerController'
import type { PropType } from 'vue'
import type { TFormData } from '@/components/hiForm/types'

const props = defineProps({
  controller: {
    type: HiFormDatePickerController,
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
  disabledTime,
  showNow,
  showTime,
  showToday,
  onChange
} = config
</script>

<style scoped lang="less"></style>
