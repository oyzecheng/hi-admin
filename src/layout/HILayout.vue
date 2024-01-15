<template>
  <a-layout>
    <LayoutSide />
    <a-layout
      :style="{
        marginLeft: `${appStore.isLgLayout ? 0 : appStore.sideCollapsible ? 80 : 280}px`,
        transition: 'all .2s ease'
      }"
    >
      <LayoutHeader />
      <a-layout-content style="padding: 20px 40px">
        <router-view />
      </a-layout-content>
    </a-layout>
    <div
      v-if="appStore.isLgLayout && appStore.lgLayoutSideShow"
      class="sider-mask"
      @click="handleClickMask"
    />
  </a-layout>
</template>

<script setup>
import LayoutSide from '@/layout/components/LayoutSide.vue'
import LayoutHeader from '@/layout/components/LayoutHeader.vue'
import { useAppStore } from '@/stores/app.ts'

const appStore = useAppStore()

const handleClickMask = () => {
  appStore.setLgLayoutSideShow()
}
</script>

<style scoped lang="less">
.sider-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-mask-bg);
  z-index: 8;
}
</style>
