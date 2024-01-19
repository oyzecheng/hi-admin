<template>
  <a-config-provider :theme="antdTheme.theme" :locale="zhCN">
    <router-view />
  </a-config-provider>
</template>

<script setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { useAntdTheme } from '@/hooks/useAntdTheme.ts'
import { useAppStore } from '@/stores/app.ts'
import { changeThemeColor } from '@/utils/index.ts'
import { watch } from 'vue'

const antdTheme = useAntdTheme()
const appStore = useAppStore()

const handleChangeColor = (color) => {
  antdTheme.changeThemeColorPrimary(color)
}

watch(
  () => appStore.themeColor,
  () => {
    handleChangeColor(appStore.themeColor)
    changeThemeColor(appStore.themeColor)
  },
  { immediate: true }
)
</script>

<style scoped></style>
