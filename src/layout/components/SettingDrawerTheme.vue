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

const props = defineProps({
  changeColor: {
    type: Function,
    default: null
  }
})

const { changeColor } = props
const appStore = useAppStore()

const themeList = [
  { id: 1, value: 'rgba(1,167,111,1)' },
  { id: 2, value: 'rgba(9,141,238,1)' },
  { id: 3, value: 'rgba(118,53,220,1)' },
  { id: 4, value: 'rgba(33,101,209,1)' },
  { id: 5, value: 'rgba(253,169,44,1)' },
  { id: 6, value: 'rgba(255,47,48,1)' }
]

const handleClickThemeColor = (themeColor: string) => {
  changeColor && changeColor(themeColor) // TODO 这里的changeColor需要优化
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
