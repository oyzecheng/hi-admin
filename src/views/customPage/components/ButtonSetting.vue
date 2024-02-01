<template>
  <div class="button-setting">
    <SettingDrawerModule title="参考">
      <a-button v-bind="config">{{ config?.label }}</a-button>
    </SettingDrawerModule>
    <a-divider />
    <SettingDrawerModule
      :title="item.getConfig().label"
      v-for="item in controllerList"
      :key="item.key"
    >
      <RenderItem :controller="item" :form-data="config" />
    </SettingDrawerModule>
    <SettingDrawerModule title="事件">
      <RenderItem :controller="buttonEvent" :form-data="formData" />
    </SettingDrawerModule>
    <SettingDrawerModule v-if="formData.event === 'toPage'" title="跳转页面">
      <a-segmented
        :options="[
          { label: '内部页面', value: 1 },
          { label: '外部页面', value: 2 }
        ]"
        v-model:value="formData.pageType"
        style="margin-bottom: 10px"
      />
      <RenderItem
        v-if="formData.pageType === 1"
        :controller="internalPageName"
        :form-data="formData"
      />
      <RenderItem v-else :controller="externalPageUrl" :form-data="formData" />
    </SettingDrawerModule>
    <SettingDrawerModule v-if="formData.event === 'fetch'" title="请求接口">
      <RenderItem :controller="fetchId" :form-data="formData" />
    </SettingDrawerModule>
  </div>
</template>

<script setup lang="ts">
import SettingDrawerModule from '@/layout/components/SettingDrawerModule.vue'
import RenderItem from '@/components/hiForm/renders/RenderItem.vue'
import { useFormCascader, useFormInput, useFormSelect, useFormSwitch } from '@/components/hiForm'
import {
  buttonTypeDic,
  buttonSizeDic,
  buttonShapeDic,
  buttonEventDic,
  pageDic
} from '@/views/customPage/dic/buttonDic'
import { reactive, toRefs } from 'vue'

const props = defineProps({
  config: {
    type: Object,
    required: true
  }
})

const { config } = toRefs(props)
const formData = reactive({ pageType: 1, event: 'toPage' })
const formItemStyle = { width: '100%' }
config.value.formData = formData

const buttonLabel = useFormInput('名称', 'label')
const buttonType = useFormSelect('类型', 'type', {
  children: buttonTypeDic,
  style: formItemStyle
})
const buttonSize = useFormSelect('尺寸', 'size', {
  children: buttonSizeDic,
  style: formItemStyle
})
const buttonShape = useFormSelect('形状', 'shape', {
  children: buttonShapeDic,
  style: formItemStyle
})
const buttonDanger = useFormSwitch('危险', 'danger')
const buttonEvent = useFormSelect('事件', 'event', {
  children: buttonEventDic,
  style: formItemStyle,
  placeholder: '按钮事件'
})

const internalPageName = useFormCascader('内部页面', 'internalPageName', {
  placeholder: '选择内部页面',
  style: formItemStyle,
  children: pageDic
})
const externalPageUrl = useFormInput('外部页面', 'externalPageUrl', {
  placeholder: '外部页面链接'
})
const fetchId = useFormSelect('接口', 'fetchId', {
  placeholder: '选择接口',
  style: formItemStyle
})

const controllerList = [buttonLabel, buttonType, buttonSize, buttonShape, buttonDanger]
</script>

<style scoped lang="less"></style>
