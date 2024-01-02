<template>
  <a-config-provider :theme="antdTheme" :locale="zhCN">
    <HILayout />
  </a-config-provider>
</template>

<script setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { antdTheme } from '@/config/antdTheme.ts'
import HILayout from '@/layout/HILayout.vue'
</script>

<style scoped></style>
