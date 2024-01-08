<template>
  <component :is="currentComponent" :formData="formData" :controller="controller" />
</template>

<script setup lang="ts">
import { type PropType, shallowRef } from 'vue'
import type { TFormData, TFormItemControllers } from '@/components/hiForm/types'
import RenderRadio from '@/components/hiForm/renders/RenderRadio.vue'
import RenderCheckbox from '@/components/hiForm/renders/RenderCheckbox.vue'
import RenderInput from '@/components/hiForm/renders/RenderInput.vue'
import RenderSelect from '@/components/hiForm/renders/RenderSelect.vue'
import RenderUpload from '@/components/hiForm/renders/renderUpload/RenderUpload.vue'

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
    default:
      return false
  }
}
setComponent()
</script>

<style scoped></style>
