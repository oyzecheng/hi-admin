<template>
  <div class="home-view">
    <HiButtonList :config-list="[button2, button1, modalTEst]"></HiButtonList>
    <div class="container"></div>
    <HiModal :controller="modal" />
  </div>
</template>

<script setup>
import HiModal from '@/components/hiModal/HiModal.vue'
import HiButtonList from '@/components/hiButton/HiButtonList.vue'
import { useHiButton, useHiPrimaryButton } from '@/components/hiButton/index.ts'
import { useRouter } from 'vue-router'
import { useHIModal } from '@/components/hiModal/hooks/useHIModal.ts'
import { useUserStore } from '@/stores/user.ts'

const router = useRouter()
const userStore = useUserStore()

const modal = useHIModal({ title: 'test title' })

const button1 = useHiButton('to form', { loading: false, type: 'primary' })
const button2 = useHiButton('to table', { danger: true })
const modalTEst = useHiPrimaryButton('modal')
button1.onClick(() => {
  router.push({ name: 'form' })
})
button2.onClick(() => {
  userStore.getUserInfo()
})
modalTEst.onClick(() => {
  modal.showModal({ record: 'aa' })
})
modal.onOk((params) => {
  console.log('===', params)
})
</script>

<style scoped lang="less">
.container {
  width: 100px;
  height: 1000px;
  background-color: #eee;
}
</style>
