<template>
  <div class="home-view">
    <HiButtonList :config-list="[button2, button1]"></HiButtonList>
    <div class="container"></div>
  </div>
</template>

<script setup>
import HiButtonList from '@/components/hiButton/HiButtonList.vue'
import { useHiButton } from '@/components/hiButton/index.ts'
import { useRouter } from 'vue-router'

const router = useRouter()

const button1 = useHiButton('to form', { loading: false, type: 'primary' })
const button2 = useHiButton('to table', { danger: true })
button1.onClick(() => {
  router.push({ name: 'form' })
})
button2.onClick(() => {
  router.push({ name: 'table' })
})
</script>

<style scoped lang="less">
.container {
  width: 100px;
  height: 1000px;
  background-color: #eee;
}
</style>
