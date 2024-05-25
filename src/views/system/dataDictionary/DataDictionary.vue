<template>
  <HiPage :table-controller="tableController" :top-button-controller="[createButton]" />
</template>

<script setup lang="ts">
import HiPage from '@/components/hiPage/HiPage.vue'
import { tableController, editButton, delButton, createButton } from './pageConfig'
import { useRouter } from 'vue-router'
import { DataDictionaryList, DataDictionaryDel } from '@/api/dataDictionary'

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
editButton.onClick((controller) => {
  const { record } = controller.clickParams
  router.push({ name: 'dataDictionaryEdit', params: { id: record.id } })
})
</script>

<style scoped lang="less"></style>
