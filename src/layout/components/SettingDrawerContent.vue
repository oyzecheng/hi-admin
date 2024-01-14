<template>
  <div class="setting-drawer-content">
    <SettingDrawerTheme :changeColor="changeColor" />
  </div>
</template>

<script setup lang="ts">
import SettingDrawerTheme from '@/layout/components/SettingDrawerTheme.vue'

const props = defineProps({
  changeColor: {
    type: Function,
    default: null
  }
})

const { changeColor } = props
</script>

<style scoped lang="less"></style>
