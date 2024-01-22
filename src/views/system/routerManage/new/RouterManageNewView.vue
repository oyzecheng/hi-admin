<template>
  <div class="module-container">
    <HiForm :controller="newFormController">
      <template #buttons>
        <p>buttons</p>
      </template>
    </HiForm>
  </div>
</template>

<script setup lang="ts">
import HiForm from '@/components/hiForm/HiForm.vue'
import { newFormController } from './pageConfig'
</script>

<style scoped lang="less"></style>
