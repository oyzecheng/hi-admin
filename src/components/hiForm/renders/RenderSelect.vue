<template>
  <a-select
    v-model:value="formData[controller.model]"
    :allow-clear="allowClear"
    :disabled="disabled"
    :bordered="bordered"
    :size="size"
    :placeholder="placeholder"
    :status="status"
    :show-search="showSearch"
    :style="style"
    @change="onChange"
  >
    <a-select-option
      v-for="item in selectChildren"
      :key="item.value"
      :value="item.value"
      :disabled="item.disabled"
    >
      {{ item.label }}
    </a-select-option>
  </a-select>
</template>

<script setup lang="ts">
import { HiFormSelectController } from '@/components/hiForm/controller/hiFormSelectController'
import type { PropType } from 'vue'
import type { TFormData } from '@/components/hiForm/types'

const props = defineProps({
  controller: {
    type: HiFormSelectController,
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
  disabled,
  bordered,
  size,
  placeholder,
  status,
  showSearch,
  children,
  style,
  onChange
} = config
const selectChildren =
  children && 'getChildren' in children ? children.getChildren() : children || []
</script>

<style scoped></style>
