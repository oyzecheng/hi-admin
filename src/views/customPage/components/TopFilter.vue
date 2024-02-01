<template>
  <SettingDrawerModule title="顶部筛选">
    <a-row :gutter="[12, 12]">
      <a-col v-for="item in topFilterList" :key="item.key">
        <CustomContainer @on-del="handleDel(item)" @on-edit="handleEdit(item)">
          <a-form-item :label="item.label">
            <a-input v-if="item.type === 'input'" />
            <a-select v-if="item.type === 'select'" />
          </a-form-item>
        </CustomContainer>
      </a-col>
      <a-col>
        <HiButton :controller="createButton" />
      </a-col>
    </a-row>
  </SettingDrawerModule>
</template>

<script setup lang="ts">
import SettingDrawerModule from '@/layout/components/SettingDrawerModule.vue'
import CustomContainer from '@/views/customPage/components/CustomContainer.vue'
import HiButton from '@/components/hiButton/HiButton.vue'
import { useHiButton } from '@/components/hiButton'
import { CustomPageController } from '@/views/customPage/controller/customPageController'
import type { ICustomFormItemConfig } from '@/views/customPage/types'

const props = defineProps({
  controller: {
    type: CustomPageController,
    required: true
  }
})

const { controller } = props
const { topFilterList } = controller.getPageConfig()

const createButton = useHiButton('添加筛选项')

createButton.onClick(() => {
  controller?.addTopFilterItem()
})

const handleDel = ({ key }: ICustomFormItemConfig) => {
  controller?.removeTopFilterItem(key)
}
const handleEdit = (item: ICustomFormItemConfig) => {
  controller?.setCurrentEditItem(item)
  controller?.openFormItemDrawer()
}
</script>

<style scoped lang="less"></style>
