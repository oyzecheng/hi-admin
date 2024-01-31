<template>
  <SettingDrawerModule title="indexDB">
    <HiButton :controller="removeDBButton" />
  </SettingDrawerModule>
</template>

<script setup>
import HiButton from '@/components/hiButton/HiButton.vue'
import SettingDrawerModule from '@/layout/components/SettingDrawerModule.vue'
import { useHiButton } from '@/components/hiButton'
import { mockDb } from '@/mock/db/index.js'

const removeDBButton = useHiButton('删除数据库', { type: 'text', danger: true })

removeDBButton.onClick(() => {
  mockDb.removeDb()
})
</script>

<style scoped lang="less"></style>
