<template>
  <a-radio-group
    :value="value"
    @update:value="(val: boolean) => emits('update:value', val)"
    :options="radioChildren"
    :style="style"
    @change="onChange"
  />
</template>

<script setup lang="ts">
import { HiFormRadioController } from '@/components/hiForm/controller/hiFormRadioController'
import { toRefs } from 'vue'

const props = defineProps({
  controller: {
    type: HiFormRadioController,
    required: true
  },
  value: {
    type: [Boolean, String, Number]
  }
})

const emits = defineEmits(['update:value'])
const { controller, value } = toRefs(props)
const config = controller.value?.getConfig()
const { onChange, children, style } = config
const radioChildren =
  children && 'getChildren' in children ? children.getChildren() : children || []
</script>

<style scoped></style>
