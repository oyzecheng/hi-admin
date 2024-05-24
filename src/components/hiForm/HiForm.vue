<template>
  <a-form
    @finish="handleFinish"
    @finishFailed="handleFinish"
    :model="formData"
    v-bind="formConfig"
    :layout="
      formConfig.layout ? formConfig.layout : appStore.isLgLayout ? 'vertical' : 'horizontal'
    "
    :labelCol="
      formConfig.labelCol ? formConfig.labelCol : appStore.isLgLayout ? undefined : { span: 4 }
    "
    ref="formRef"
  >
    <template v-if="slots.content">
      <slot name="content" :formData="formData" :rules="rules" :controllerList="configList" />
    </template>
    <template v-else>
      <HiFormItem
        v-for="(item, index) in configList"
        :key="index"
        :config="item"
        :formData="formData"
        :rules="rules"
        :layoutCol="formConfig.layoutCol"
      >
        <template v-for="item in Object.keys(slots) || []" :key="item" v-slot:[item]="{ config }">
          <slot :name="item" :formData="formData" :config="config" :rules="rules" />
        </template>
      </HiFormItem>
    </template>
    <a-form-item :wrapper-col="{ offset: wrapperColOffset }" v-if="setButtonConfig">
      <HiButtonList :config-list="setButtonConfig" />
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import HiButtonList from '@/components/hiButton/HiButtonList.vue'
import { HiFormController } from '@/components/hiForm/controller/hiFormController'
import HiFormItem from '@/components/hiForm/HiFormItem'
import { useHiButton } from '@/components/hiButton'
import { computed, nextTick, type PropType, ref, useSlots } from 'vue'
import type { HiButtonController } from '@/components/hiButton/controller/hiButtonController'
import { useAppStore } from '@/stores/app'

const emit = defineEmits(['onFinish'])
const slots = useSlots()
const appStore = useAppStore()

const formRef = ref(null)

const props = defineProps({
  controller: {
    type: HiFormController,
    required: true
  },
  buttonConfig: {
    type: Array as PropType<Array<HiButtonController> | null>,
    default: () => []
  }
})

const { controller, buttonConfig } = props
controller?.init()
const formData = controller?.getFormData()
const rules = controller?.getRules()
const configList = controller?.getConfigList()
const formConfig = controller?.getConfig()
const wrapperColOffset = formConfig.buttonListOffset || formConfig.labelCol?.span || 4

const confirmButton = useHiButton('确定', { type: 'primary', htmlType: 'submit' })
const cancelButton = useHiButton('取消')

confirmButton.onClick((button) => {
  controller.defaultConfirm && controller.defaultConfirm(button)
})
cancelButton.onClick((button) => {
  controller.defaultCancel && controller.defaultCancel(button)
})

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
