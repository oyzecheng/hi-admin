<template>
  <a-config-provider :theme="antdTheme.theme" :locale="zhCN">
    <HILayout :changeColor="handleChangeColor" />
  </a-config-provider>
</template>

<script setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import HILayout from '@/layout/HILayout.vue'
import { useAntdTheme } from '@/hooks/useAntdTheme.ts'
import { useAppStore } from '@/stores/app.ts'
import { changeThemeColor } from '@/utils/index.ts'

const antdTheme = useAntdTheme()
const appStore = useAppStore()

const handleChangeColor = (color) => {
  antdTheme.changeThemeColorPrimary(color)
}

changeThemeColor(appStore.themeColor)
handleChangeColor(appStore.themeColor)
</script>

<style scoped></style>
