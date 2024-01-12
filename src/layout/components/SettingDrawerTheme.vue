<template>
  <SettingDrawerModule title="主题">
    <div class="theme-list">
      <div
        :class="{ 'theme-item': true, 'theme-item-active': appStore.themeColor === item.value }"
        v-for="item in themeList"
        :key="item.id"
        @click="handleClickThemeColor(item.value)"
      >
        <span :style="{ backgroundColor: item.value }"></span>
      </div>
    </div>
  </SettingDrawerModule>
</template>

<script setup lang="ts">
import SettingDrawerModule from '@/layout/components/SettingDrawerModule.vue'
import { useAppStore } from '@/stores/app'
import { changeThemeColor } from '@/utils'
import { useAntdTheme } from '@/hooks/useAntdTheme'

const appStore = useAppStore()
const antdTheme = useAntdTheme()

const themeList = [
  { id: 1, value: '#01A76F' },
  { id: 2, value: '#098DEE' },
  { id: 3, value: '#7635DC' },
  { id: 4, value: '#2165D1' },
  { id: 5, value: '#FDA92C' },
  { id: 6, value: '#FF2F30' }
]

const handleClickThemeColor = (themeColor: string) => {
  antdTheme.changeThemeColorPrimary('red')
  appStore.setThemeColor(themeColor)
  changeThemeColor(themeColor)
}
</script>

<style scoped lang="less">
.theme-list {
  display: grid;
  gap: 12px 16px;
  grid-template-columns: repeat(3, 1fr);
  .theme-item {
    height: 56px;
    border-radius: 10px;
    border: 1px solid #f6f5f6;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-background);
    transition: background-color 0.3s ease-out;
    span {
      width: 12px;
      height: 12px;
      display: inline-block;
      border-radius: 100px;
      transition: all 0.3s ease-out;
    }
  }
  .theme-item-active {
    background-color: var(--color-hover-primary-bg);
    span {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
