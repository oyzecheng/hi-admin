<template>
  <a-radio-group
    v-model:value="formData[controller.model]"
    :options="radioChildren"
    :style="style"
    @change="onChange"
  />
</template>

<script setup lang="ts">
import { HiFormRadioController } from '@/components/hiForm/controller/hiFormRadioController'
import type { PropType } from 'vue'
import type { TFormData } from '@/components/hiForm/types'

const props = defineProps({
  controller: {
    type: HiFormRadioController,
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
const radioChildren =
  children && 'getChildren' in children ? children.getChildren() : children || []
</script>

<style scoped></style>
