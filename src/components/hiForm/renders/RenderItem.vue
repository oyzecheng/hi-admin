<template>
  <component
    :is="currentComponent"
    v-model:value="formData[controller.model]"
    :formData="formData"
    :controller="controller"
  />
</template>

<script setup lang="ts">
import { type PropType, shallowRef } from 'vue'
import type { TFormData, TFormItemControllers } from '@/components/hiForm/types'
import RenderRadio from '@/components/hiForm/renders/RenderRadio.vue'
import RenderCheckbox from '@/components/hiForm/renders/RenderCheckbox.vue'
import RenderInput from '@/components/hiForm/renders/RenderInput.vue'
import RenderSelect from '@/components/hiForm/renders/RenderSelect.vue'
import RenderUpload from '@/components/hiForm/renders/renderUpload/RenderUpload.vue'
import RenderSwitch from '@/components/hiForm/renders/RenderSwitch.vue'
import RenderInputNumber from '@/components/hiForm/renders/RenderInputNumber.vue'
import RenderRate from '@/components/hiForm/renders/RenderRate.vue'
import RenderCascader from '@/components/hiForm/renders/RenderCascader.vue'
import RenderDatePicker from '@/components/hiForm/renders/RenderDatePicker.vue'
import RenderDateRangePicker from '@/components/hiForm/renders/RenderDateRangePicker.vue'

const props = defineProps({
  controller: {
    type: Object as PropType<TFormItemControllers>,
    required: true
  },
  formData: {
    type: Object as PropType<TFormData>,
    required: true
  }
})

const { controller, formData } = props
const currentComponent = shallowRef<any>(null)

const setComponent = () => {
  switch (controller?.controllerType) {
    case 'input':
      currentComponent.value = RenderInput
      return true
    case 'select':
      currentComponent.value = RenderSelect
      return true
    case 'checkbox':
      currentComponent.value = RenderCheckbox
      return true
    case 'radio':
      currentComponent.value = RenderRadio
      return true
    case 'upload':
      currentComponent.value = RenderUpload
      return true
    case 'switch':
      currentComponent.value = RenderSwitch
      return true
    case 'inputNumber':
      currentComponent.value = RenderInputNumber
      return true
    case 'rate':
      currentComponent.value = RenderRate
      return true
    case 'cascader':
      currentComponent.value = RenderCascader
      return true
    case 'datePicker':
      currentComponent.value = RenderDatePicker
      return true
    case 'dateRangePicker':
      currentComponent.value = RenderDateRangePicker
      return true
    default:
      return false
  }
}
setComponent()
</script>

<style scoped></style>
