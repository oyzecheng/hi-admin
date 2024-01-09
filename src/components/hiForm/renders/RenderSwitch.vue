<template>
  <a-switch
    v-model:checked="formData[controller.model]"
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
import type { PropType } from 'vue'
import type { TFormData } from '@/components/hiForm/types'

const props = defineProps({
  controller: {
    type: HiFormSwitchController,
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
