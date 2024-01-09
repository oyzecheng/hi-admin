<template>
  <div class="form-view">
    <HiForm :controller="form" />
  </div>
</template>

<script setup>
import HiForm from '@/components/hiForm/HiForm.vue'
import { form } from './pageConfig.ts'

form.onDefaultConfirm(() => {
  console.log(form.getFormData())
})
</script>

<style scoped></style>
