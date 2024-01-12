<template>
  <a-config-provider :theme="antdTheme.theme" :locale="zhCN">
    <a-button @click="handleChangeColor" style="z-index: 9999">change color</a-button>
    <HILayout />
  </a-config-provider>
</template>

<script setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import HILayout from '@/layout/HILayout.vue'
import { useAntdTheme } from '@/hooks/useAntdTheme.ts'
import { useAppStore } from '@/stores/app.ts'

const antdTheme = useAntdTheme()
const appStore = useAppStore()

const handleChangeColor = () => {
  console.log('--')
  antdTheme.changeThemeColorPrimary('blue')
}
</script>

<style scoped></style>
