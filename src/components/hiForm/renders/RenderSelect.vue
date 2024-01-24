<template>
  <a-select
    :value="value"
    @update:value="(val: any) => emits('update:value', val)"
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
import { toRefs } from 'vue'

const props = defineProps({
  controller: {
    type: HiFormSelectController,
    required: true
  },
  value: {
    type: [String, Number, Boolean]
  }
})

const emits = defineEmits(['update:value'])
const { controller, value } = toRefs(props)
const config = controller.value?.getConfig()
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
