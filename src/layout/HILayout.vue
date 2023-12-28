<template>
  <a-layout>
    <LayoutSide></LayoutSide>
    <a-layout style="margin-left: 280px">
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
</script>

<style scoped></style>
