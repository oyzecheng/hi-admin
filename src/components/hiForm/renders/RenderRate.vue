<template>
  <a-rate
    v-model:value="formData[controller.model]"
    :allowClear="allowClear"
    :allowHalf="allowHalf"
    :autofocus="autofocus"
    :character="character"
    :count="count"
    :disabled="disabled"
    :tooltips="tooltips"
    @change="onChange"
  />
</template>

<script setup lang="ts">
import { HiFormRateController } from '@/components/hiForm/controller/hiFormRateController.js'
import type { PropType } from 'vue'
import type { TFormData } from '@/components/hiForm/types'

const props = defineProps({
  controller: {
    type: HiFormRateController,
    required: true
  },
  formData: {
    type: Object as PropType<TFormData>,
    required: true
  }
})

const { controller, formData } = props
const config = controller?.getConfig()
const { allowClear, allowHalf, autofocus, character, count, disabled, tooltips, onChange } = config
</script>

<style scoped lang="less"></style>
