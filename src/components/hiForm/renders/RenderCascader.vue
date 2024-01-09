<template>
  <a-cascader
    v-model:value="formData[controller.model]"
    :allowClear="allowClear"
    :autofocus="autofocus"
    :bordered="bordered"
    :changeOnSelect="changeOnSelect"
    :disabled="disabled"
    :displayRender="displayRender"
    :expandTrigger="expandTrigger"
    :fieldNames="fieldNames"
    :loadData="loadData"
    :maxTagCount="maxTagCount"
    :maxTagPlaceholder="maxTagPlaceholder"
    :multiple="multiple"
    :notFoundContent="notFoundContent"
    :open="open"
    :placeholder="placeholder"
    :showCheckedStrategy="showCheckedStrategy"
    :searchValue="searchValue"
    :showSearch="showSearch"
    :status="status"
    :size="size"
    :suffixIcon="suffixIcon"
    :options="cascaderChilcren"
    @change="onChange"
  />
</template>

<script setup lang="ts">
import { HiFormCascaderController } from '@/components/hiForm/controller/hiFormCascaderController'
import type { PropType } from 'vue'
import type { TFormData } from '@/components/hiForm/types'

const props = defineProps({
  controller: {
    type: HiFormCascaderController,
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
  allowClear,
  autofocus,
  bordered,
  changeOnSelect,
  disabled,
  displayRender,
  expandTrigger,
  fieldNames,
  loadData,
  maxTagCount,
  maxTagPlaceholder,
  multiple,
  notFoundContent,
  open,
  children,
  placeholder,
  showCheckedStrategy,
  searchValue,
  showSearch,
  status,
  size,
  suffixIcon,
  onChange
} = config
const cascaderChilcren =
  children && 'getChildren' in children ? children.getChildren() : children || []
</script>

<style scoped lang="less"></style>
