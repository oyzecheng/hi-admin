<template>
  <a-checkbox-group
    v-model:value="formData[controller.model]"
    @change="onChange"
    :options="checkboxChildren"
    :style="style"
  />
</template>

<script setup lang="ts">
import { HiFormCheckboxController } from '@/components/hiForm/controller/hiFormCheckboxController'
import type { PropType } from 'vue'
import type { TFormData } from '@/components/hiForm/types'

const props = defineProps({
  controller: {
    type: HiFormCheckboxController,
    required: true
  },
  formData: {
    type: Object as PropType<TFormData>,
    required: true
  }
})

const { controller, formData } = props
const config = controller?.getConfig()
const { onChange, children, style } = config
const checkboxChildren =
  children && 'getChildren' in children ? children.getChildren() : children || []
</script>

<style scoped></style>
