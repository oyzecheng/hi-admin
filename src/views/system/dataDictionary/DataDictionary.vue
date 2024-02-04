<template>
  <HiPage :table-controller="tableController" :top-button-controller="[createButton]" />
</template>

<script setup>
import HiPage from '@/components/hiPage/HiPage.vue'
import { tableController, editButton, delButton, createButton } from './pageConfig.ts'
import { useRouter } from 'vue-router'
import { DataDictionaryList, DataDictionaryDel } from '@/api/dataDictionary.ts'

const router = useRouter()

tableController.setLoadData((params) => {
  return DataDictionaryList(params)
})

createButton.onClick(() => {
  router.push({ name: 'dataDictionaryNew' })
})
delButton.onConfirm(async (controller) => {
  const { record } = controller.clickParams
  await DataDictionaryDel(record.id)
  tableController.reloadData()
})
</script>

<style scoped lang="less"></style>
