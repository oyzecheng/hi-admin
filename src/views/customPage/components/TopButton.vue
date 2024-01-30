<template>
  <SettingDrawerModule title="顶部按钮">
    <a-row :gutter="[12, 12]">
      <a-col v-for="(item, index) in buttonList" :key="index">
        <CustomContainer @on-del="handleDel(index)" @on-edit="handleEdit(item)">
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
const buttonList = controller.getTopButtonList()

createButton.onClick(() => {
  controller?.addTopButton()
})
const handleDel = (index: number) => {
  buttonList.splice(index, 1)
}
const getButtonList = () => {
  return buttonList
}
const handleEdit = (item: ICustomButtonConfig) => {
  controller?.setCurrentEditItem(item)
  controller?.openItemDrawer()
}

defineExpose({
  getButtonList
})
</script>

<style scoped lang="less"></style>
