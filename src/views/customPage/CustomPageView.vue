<template>
  <div class="custom-page">
    <HiButton style="margin-bottom: 20px" :controller="editPageButton" />
    <HiPage :table-controller="tableController" :top-button-controller="state.topButtonList" />
    <!-- 页面配置 -->
    <CustomPageSetting
      :controller="customPageController"
      @onClose="customPageController.closePageDrawer()"
      @onConfirm="handleGenerate"
    />
    <!-- button或form item配置 -->
    <CustomPageItemSetting :controller="customPageController" />
  </div>
</template>

<script setup>
import HiPage from '@/components/hiPage/HiPage.vue'
import HiButton from '@/components/hiButton/HiButton.vue'
import CustomPageSetting from '@/views/customPage/CustomPageSetting.vue'
import CustomPageItemSetting from '@/views/customPage/CustomPageItemSetting.vue'
import { tableController, editPageButton } from './pageConfig'
import { reactive } from 'vue'
import { useHiButton } from '@/components/hiButton/index.ts'
import { CustomPageController } from '@/views/customPage/controller/customPageController.ts'
import { useRouter } from 'vue-router'

const state = reactive({
  topButtonList: []
})
const customPageController = new CustomPageController()
const router = useRouter()

tableController.setLoadData(() => {
  return new Promise((resolve) => {
    resolve({
      data: { page: 1, pageSize: 10, list: [{ id: 1, name: 'name', test: 'test' }], count: 10 }
    })
  })
})

const handleGenerate = (config) => {
  const { topButton } = config
  state.topButtonList = topButton.map((item) => {
    const button = useHiButton('', item)
    button.onClick((controller) => {
      const { formData } = item
      const { pageType, externalPageUrl, internalPageName, event } = formData || {}
      if (event === 'toPage') {
        if (pageType === 1 && internalPageName?.length) {
          router.push({ name: internalPageName[internalPageName.length - 1] })
        } else if (pageType === 2) {
          window.open(externalPageUrl, '_blank')
        }
      } else if (event === 'fetch') {
        console.log('--') // TODO
      }
    })
    return button
  })
  customPageController.closePageDrawer()
}

editPageButton.onClick(() => {
  customPageController.openPageDrawer()
})
</script>

<style scoped lang="less"></style>
