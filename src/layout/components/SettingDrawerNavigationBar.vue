<template>
  <SettingDrawerModule title="导航栏">
    <a-switch
      checked-children="开启"
      un-checked-children="关闭"
      :checked="appStore.navigationBarShow"
      @change="handleChangeNavigationBar"
    />
  </SettingDrawerModule>
</template>

<script setup>
import SettingDrawerModule from '@/layout/components/SettingDrawerModule.vue'
import { useAppStore } from '@/stores/app.ts'
import { useRoute } from 'vue-router'

const appStore = useAppStore()
const route = useRoute()

const handleChangeNavigationBar = () => {
  appStore.setNavigationBarShow(!appStore.navigationBarShow)
  appStore.addNavigation(appStore.generateNavigationItemByRoute(route))
}
</script>

<style scoped lang="less"></style>
