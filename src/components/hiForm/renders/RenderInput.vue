<template>
  <component
    :is="currentComponent"
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
    @change="handleChange"
  />
</template>

<script setup lang="ts">
import { InputPassword, Input, Textarea } from 'ant-design-vue'
import { HiFormInputController } from '@/components/hiForm/controller/hiFormInputController'
import { type PropType, shallowRef } from 'vue'
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
  style,
  modalType
} = config
const currentComponent = shallowRef<any>()

switch (modalType) {
  case 'password':
    currentComponent.value = InputPassword
    break
  case 'textarea':
    currentComponent.value = Textarea
    break
  default:
    currentComponent.value = Input
}

const handleChange = (e: any) => {
  const { value } = e.target
  onChange && onChange(value)
}
</script>

<style scoped></style>
