<template>
  <a-cascader
    :value="value"
    @update:value="(val: any[]) => emits('update:value', val)"
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
import { toRefs } from 'vue'

const props = defineProps({
  controller: {
    type: HiFormCascaderController,
    required: true
  },
  value: {
    type: Array
  }
})

const emits = defineEmits(['update:value'])
const { controller, value } = toRefs(props)
const config = controller.value?.getConfig()
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
