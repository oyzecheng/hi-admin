<template>
  <div class="custom-page">
    <HiButton style="margin-bottom: 20px" :controller="editPageButton" />
    <HiPage
      ref="pageRef"
      :table-controller="tableController"
      :top-button-controller="state.topButtonList"
      :search-form-controller="topSearchFormController"
    >
      <template #searchFormContent="{ formData, rules }">
        <HiFormItem
          v-for="item in topFilterList"
          :key="item.key"
          :config="item"
          :formData="formData"
          :rules="rules"
        />
      </template>
    </HiPage>
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
import HiFormItem from '@/components/hiForm/HiFormItem.tsx'
import CustomPageSetting from '@/views/customPage/CustomPageSetting.vue'
import CustomPageItemSetting from '@/views/customPage/CustomPageItemSetting.vue'
import { tableController, editPageButton, drawerFooterConfirm } from './pageConfig'
import { CustomPageSave, CustomPageDetail } from '@/api/customPage.ts'
import { onMounted, reactive, ref, shallowRef } from 'vue'
import { useHiButton } from '@/components/hiButton/index.ts'
import { CustomPageController } from '@/views/customPage/controller/customPageController.ts'
import { useRoute, useRouter } from 'vue-router'
import { useFormInput, useFormSelect, useHiForm } from '@/components/hiForm/index.ts'

const state = reactive({
  topButtonList: []
})
const topFilterList = shallowRef([])
const topSearchFormController = useHiForm([], { layout: 'inline' })
const customPageController = new CustomPageController()
const router = useRouter()
const route = useRoute()
const pageRef = ref(null)

onMounted(() => {
  getDetail()
})

tableController.setLoadData(() => {
  return new Promise((resolve) => {
    resolve({
      data: { page: 1, pageSize: 10, list: [{ id: 1, name: 'name', test: 'test' }], count: 10 }
    })
  })
})

const getDetail = async () => {
  const data = await CustomPageDetail(route.name)
  if (data) {
    initCustomPage(data)
    customPageController.init(data)
  }
  console.log('data', data)
}

const initCustomPage = (data) => {
  const { topButtonList, topFilterList } = data

  initTopButtonList(topButtonList)
  initTopSearch(topFilterList)
}

const initTopButtonList = (list) => {
  state.topButtonList = list.map((item) => {
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
}

const initTopSearch = (list) => {
  const formItemList = list.map((item) => {
    switch (item.type) {
      case 'input':
        return useFormInput(item.label, item.model)
      case 'select':
        return useFormSelect(item.label, item.model, { style: { minWidth: '180px' } })
    }
  })

  topFilterList.value = formItemList
  pageRef.value.overrideSearchFormItemOnChange(formItemList)
  topSearchFormController.init(formItemList)
}

const handleGenerate = async (config) => {
  drawerFooterConfirm.showLoading()
  try {
    await CustomPageSave(route.name, config)
    getDetail()
    customPageController.closePageDrawer()
  } finally {
    drawerFooterConfirm.hideLoading()
  }
}

editPageButton.onClick(() => {
  customPageController.openPageDrawer()
})
</script>

<style scoped lang="less"></style>
