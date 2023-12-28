<template>
  <a-config-provider :theme="antdTheme">
    <HILayout />
  </a-config-provider>
</template>

<script setup>
import { antdTheme } from '@/config/antdTheme.ts'
import HILayout from '@/layout/HILayout.vue'
</script>

<style scoped></style>
