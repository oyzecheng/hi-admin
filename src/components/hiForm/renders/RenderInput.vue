<template>
  <component
    :is="currentComponent"
    :value="value"
    @update:value="(val: any) => emits('update:value', val)"
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
import { shallowRef, toRefs } from 'vue'

const props = defineProps({
  controller: {
    type: HiFormInputController,
    required: true
  },
  value: {
    type: String,
    default: ''
  }
})

const emits = defineEmits(['update:value'])
const { controller, value } = toRefs(props)
const config = controller.value?.getConfig()
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
