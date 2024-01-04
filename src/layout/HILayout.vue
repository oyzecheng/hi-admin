<template>
  <a-layout>
    <LayoutSide></LayoutSide>
    <a-layout
      :style="{
        marginLeft: `${appStore.sideCollapsible ? 80 : 280}px`,
        transition: 'all .2s ease'
      }"
    >
      <LayoutHeader></LayoutHeader>
      <a-layout-content style="padding: 20px 40px">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import LayoutSide from '@/layout/components/LayoutSide.vue'
import LayoutHeader from '@/layout/components/LayoutHeader.vue'
import { useAppStore } from '@/stores/app.ts'

const appStore = useAppStore()
</script>

<style scoped></style>
