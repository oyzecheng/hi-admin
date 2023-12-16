<template>
  <a-form @finish="handleFinish" @finishFailed="handleFinish" :model="formData">
    <HiFormItem
      v-for="item in configList"
      :key="item.key"
      :controller="item"
      :formData="formData"
      :rules="rules[item.model]"
    />
    <a-form-item>
      <HiButtonList :config-list="[confirmButton, cancelButton]" />
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import HiButtonList from '@/components/hiButton/HiButtonList.vue'
import { HiFormController } from '@/components/hiForm/controller/hiFormController'
import HiFormItem from '@/components/hiForm/HiFormItem'
import { useHiButton } from '@/components/hiButton'

const confirmButton = useHiButton('confirm', { type: 'primary', htmlType: 'submit' })
const cancelButton = useHiButton('cancel')

const emit = defineEmits(['onFinish'])

const props = defineProps({
  config: {
    type: HiFormController,
    required: true
  },
  onFinish: {
    type: Function,
    default: null
  },
  buttonConfig: {
    type: Array,
    default: () => []
  }
})

const { config } = props
const formData = config?.getFormData()
const rules = config?.getRules()
const configList = config?.getConfigList()

const handleFinish = (values) => {
  emit('onFinish', values)
}

// const formRef = ref(null)
// setTimeout(() => {
//   console.log(formRef.value?.getFieldsValue())
// }, 1000)
</script>

<style scoped></style>
