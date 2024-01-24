<template>
  <a-switch
    :checked="value"
    @update:checked="(val: any) => emits('update:value', val)"
    :size="size"
    :loading="loading"
    :autofocus="autofocus"
    :checked-value="checkedValue"
    :checked-children="checkedChildren"
    :disabled="disabled"
    :un-checked-value="unCheckedValue"
    :un-checked-children="unCheckedChildren"
    @change="onChange"
  />
</template>

<script setup lang="ts">
import { HiFormSwitchController } from '@/components/hiForm/controller/hiFormSwitchController.js'
import { toRefs } from 'vue'

const props = defineProps({
  controller: {
    type: HiFormSwitchController,
    required: true
  },
  value: {
    type: [Boolean, String, Number]
  }
})

const emits = defineEmits(['update:value'])
const { controller, value } = toRefs(props)
const config = controller.value?.getConfig()

const {
  size,
  loading,
  autofocus,
  checkedValue,
  disabled,
  checkedChildren,
  unCheckedChildren,
  unCheckedValue,
  onChange
} = config
</script>

<style scoped lang="less"></style>
