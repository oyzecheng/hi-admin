<template>
  <a-config-provider>
    <hi-button :config="button1"></hi-button>
    <HiButtonList :config-list="[button2, button1]"></HiButtonList>
    <HiForm :controller="form"></HiForm>
    <HiTable />
    <RouterView />
  </a-config-provider>
</template>

<script setup>
import hiButton from '@/components/hiButton/HiButton.vue'
import HiButtonList from '@/components/hiButton/HiButtonList.vue'
import HiForm from '@/components/hiForm/HiForm.vue'
import HiTable from '@/components/hiTable/HiTable.vue'
import { useHiButton } from '@/components/hiButton/index.ts'
import { useFormInput, useFormSelect, useHiForm } from '@/components/hiForm/index.ts'
import { useDic } from '@/components/hiDic/index.ts'
import { useFormCheckbox } from '@/components/hiForm/hooks/useCheckbox.ts'
import { useFormRadio } from '@/components/hiForm/hooks/useRadio.ts'

const button1 = useHiButton('confirm', { loading: false, type: 'primary' })
const button2 = useHiButton('danger', { danger: true })
button1.onClick((buttonConfig) => {
  buttonConfig.showLoading()
  console.log('---')
  form.validate()
})
button2.onClick(() => {
  form.validateFields([input.model])
  // console.log('formData', formData)
})

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
