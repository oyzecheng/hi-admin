<template>
  <div>
    <HiPage
      :table-controller="table"
      :search-form-controller="form"
      :top-button-controller="[newButton]"
    />
  </div>
</template>

<script setup>
import HiPage from '@/components/hiPage/HiPage.vue'
import { useHiTable } from '@/components/hiTable/hooks/useHiTable.ts'
import { useDic } from '@/components/hiDic/index.ts'
import { useFormInput, useFormSelect, useHiForm } from '@/components/hiForm/index.ts'
import { useHiButton } from '@/components/hiButton/index.ts'
import { useRouter } from 'vue-router'

const router = useRouter()

const loadData = (params) => {
  console.log(params)
  return new Promise((resolve) => {
    const { page = 1, pageSize = 10 } = params
    resolve({
      data: {
        page,
        pageSize,
        count: 89,
        list: new Array(pageSize).fill('').map((_, index) => ({
          id: (page - 1) * pageSize + index + 1,
          one: '张三',
          two: `22${index}`,
          three: 'man'
        }))
      }
    })
  })
}

const show = useHiButton('show', { size: 'small', type: 'primary', ghost: true })
show.onClick((controller) => {
  const { record } = controller.clickParams
  controller.showLoading()
  console.log('record', record)
  controller.hideLoading()
})
const edit = useHiButton('edit', { size: 'small', type: 'primary', ghost: true })
const del = useHiButton('del', { size: 'small', danger: true })
const table = useHiTable(loadData, [
  { title: 'id', key: 'id' },
  { title: 'one', key: 'one' },
  { title: 'two', key: 'two' },
  { title: 'three', key: 'three' },
  {
    title: 'action',
    key: 'action',
    width: 200,
    buttonConfigList: [show, edit, del]
  }
])

const selectChildren = useDic([
  { label: 'test', value: 'test' },
  { label: 'test2', value: 'test2' }
])

const input = useFormInput('input', 'input', {
  disabled: false
})
const select = useFormSelect('select', 'select', {
  children: selectChildren
})
const form = useHiForm([input, select], { layout: 'inline' })

const newButton = useHiButton('新建', { type: 'primary' })
newButton.onClick(() => {
  router.push({ name: 'userNew' })
})
</script>

<style scoped></style>
