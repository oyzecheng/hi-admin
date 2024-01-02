<template>
  <a-form
    @finish="handleFinish"
    @finishFailed="handleFinish"
    :model="formData"
    v-bind="formConfig"
    ref="formRef"
  >
    <HiFormItem
      v-for="item in configList"
      :key="item.key"
      :controller="item"
      :formData="formData"
      :rules="rules[item.model]"
    />
    <a-form-item v-if="setButtonConfig">
      <HiButtonList :config-list="setButtonConfig" />
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import HiButtonList from '@/components/hiButton/HiButtonList.vue'
import { HiFormController } from '@/components/hiForm/controller/hiFormController'
import HiFormItem from '@/components/hiForm/HiFormItem'
import { useHiButton } from '@/components/hiButton'
import { computed, nextTick, ref } from 'vue'

const confirmButton = useHiButton('确定', { type: 'primary', htmlType: 'submit' })
const cancelButton = useHiButton('取消')

confirmButton.onClick((button) => {
  controller.defaultConfirm && controller.defaultConfirm(button)
})
cancelButton.onClick((button) => {
  controller.defaultCancel && controller.defaultCancel(button)
})

const emit = defineEmits(['onFinish'])

const formRef = ref(null)

const props = defineProps({
  controller: {
    type: HiFormController,
    required: true
  },
  buttonConfig: {
    type: Array,
    default: () => []
  }
})

const { controller, buttonConfig } = props
const formData = controller?.getFormData()
const rules = controller?.getRules()
const configList = controller?.getConfigList()
const formConfig = controller?.getConfig()

const setButtonConfig = computed((): any[] | null => {
  return buttonConfig ? (buttonConfig.length ? buttonConfig : [confirmButton, cancelButton]) : null
})

const handleFinish = (values: any) => {
  emit('onFinish', values)
}

nextTick(() => {
  controller?.setFormRef(formRef.value)
})
</script>

<style scoped></style>
