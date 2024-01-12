<template>
  <a-modal
    :open="open"
    :confirmLoading="confirmLoading"
    :title="title"
    :cancelText="cancelText"
    :centered="centered"
    :closable="closable"
    :closeIcon="closeIcon"
    :destroyOnClose="destroyOnClose"
    :footer="footer"
    :keyboard="keyboard"
    :mask="mask"
    :maskClosable="maskClosable"
    :okText="okText"
    :okType="okType"
    :width="width"
    :zIndex="zIndex"
    @ok="handleOK"
    @cancel="handleCancel"
  ></a-modal>
</template>

<script setup lang="ts">
import { HiModalController } from '@/components/hiModal/controller/hiModalController'

const props = defineProps({
  controller: {
    type: HiModalController,
    required: true
  }
})

const { controller } = props
const config = controller?.getConfig()
const {
  confirmLoading,
  title,
  cancelText,
  centered,
  closable,
  closeIcon,
  destroyOnClose,
  footer,
  keyboard,
  mask,
  maskClosable,
  okText,
  okType,
  width,
  zIndex,
  open
} = config

const handleOK = () => {
  controller?.ok()
}
const handleCancel = () => {
  controller?.cancel()
}
</script>

<style scoped lang="less"></style>
