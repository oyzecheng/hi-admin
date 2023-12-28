<template>
  <div class="form-view">
    <HiForm :controller="form" />
  </div>
</template>

<script setup>
import HiForm from '@/components/hiForm/HiForm.vue'
import { useDic } from '@/components/hiDic/index.ts'
import { useFormInput, useFormSelect, useHiForm } from '@/components/hiForm/index.ts'
import { useFormCheckbox } from '@/components/hiForm/hooks/useCheckbox.ts'
import { useFormRadio } from '@/components/hiForm/hooks/useRadio.ts'

const selectChildren = useDic([
  { label: 'test', value: 'test' },
  { label: 'test2', value: 'test2' }
])

const input = useFormInput('input', 'input', { size: 'large', disabled: false, rules: true })
const select = useFormSelect('select', 'select', {
  children: selectChildren,
  rules: { message: '自定义提示' },
  onChange: (value) => {
    console.log('===', value)
  }
})
const checkbox = useFormCheckbox('checkbox', 'checkbox', { children: selectChildren })
const radio = useFormRadio('radio', 'radio', { children: selectChildren })

const form = useHiForm([input, select, checkbox, radio], { layout: 'inline' })
</script>

<style scoped></style>
