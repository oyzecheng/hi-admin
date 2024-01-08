<template>
  <a-input
    v-model:value="formData[controller.model]"
    :size="size"
    :disabled="disabled"
    :allow-clear="allowClear"
    :bordered="bordered"
    :placeholder="placeholder"
    :status="status"
    :type="type"
    :style="style"
    :show-count="showCount"
    @onchange="handleChange"
  />
</template>

<script setup lang="ts">
import { HiFormInputController } from '@/components/hiForm/controller/hiFormInputController'
import type { PropType } from 'vue'
import type { TFormData } from '@/components/hiForm/types'

const props = defineProps({
  controller: {
    type: HiFormInputController,
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
  size,
  disabled,
  allowClear,
  bordered,
  placeholder,
  status,
  type,
  showCount,
  onChange,
  style
} = config

const handleChange = (e: any) => {
  const { value } = e.target
  onChange && onChange(value)
}
</script>

<style scoped></style>
