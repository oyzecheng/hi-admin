<template>
  <SettingDrawerModule title="顶部按钮">
    <a-row :gutter="[12, 12]">
      <a-col v-for="item in topButtonList" :key="item.key">
        <CustomContainer @on-del="handleDel(item)" @on-edit="handleEdit(item)">
          <a-button v-bind="item">{{ item.label }}</a-button>
        </CustomContainer>
      </a-col>
      <a-col>
        <HiButton :controller="createButton" />
      </a-col>
    </a-row>
  </SettingDrawerModule>
</template>

<script setup lang="ts">
import HiButton from '@/components/hiButton/HiButton.vue'
import CustomContainer from '@/views/customPage/components/CustomContainer.vue'
import SettingDrawerModule from '@/layout/components/SettingDrawerModule.vue'
import { useHiButton } from '@/components/hiButton'
import { CustomPageController } from '@/views/customPage/controller/customPageController'
import type { ICustomButtonConfig } from '@/views/customPage/types'

const props = defineProps({
  controller: {
    type: CustomPageController,
    required: true
  }
})

const { controller } = props

const createButton = useHiButton('添加按钮')
const { topButtonList } = controller.getPageConfig()

createButton.onClick(() => {
  controller?.addTopButton()
})
const handleDel = ({ key }: ICustomButtonConfig) => {
  controller?.removeTopButtonItem(key)
}
const handleEdit = (item: ICustomButtonConfig) => {
  controller?.setCurrentEditItem(item)
  controller?.openButtonItemDrawer()
}
</script>

<style scoped lang="less"></style>
