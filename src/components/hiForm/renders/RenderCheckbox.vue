<template>
  <a-checkbox-group
    :value="value"
    @update:value="(val: any[]) => emits('update:value', val)"
    @change="onChange"
    :options="checkboxChildren"
    :style="style"
  />
</template>

<script setup lang="ts">
import { HiFormCheckboxController } from '@/components/hiForm/controller/hiFormCheckboxController'
import { toRefs } from 'vue'

const props = defineProps({
  controller: {
    type: HiFormCheckboxController,
    required: true
  },
  value: {
    type: Array
  }
})

const emits = defineEmits(['update:value'])
const { controller, value } = toRefs(props)
const config = controller.value?.getConfig()
const { onChange, children, style } = config
const checkboxChildren =
  children && 'getChildren' in children ? children.getChildren() : children || []
</script>

<style scoped></style>
