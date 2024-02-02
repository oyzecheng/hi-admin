<template>
  <div class="form-item-setting">
    <SettingDrawerModule title="参考">
      <a-form-item :label="config.label">
        <a-input v-if="config.type === 'input'" />
        <a-select v-if="config.type === 'select'" />
      </a-form-item>
    </SettingDrawerModule>
    <SettingDrawerModule title="label">
      <a-input v-model:value="config.label" />
    </SettingDrawerModule>
    <SettingDrawerModule title="类型">
      <RenderItem :controller="formItemType" :form-data="config" />
    </SettingDrawerModule>
    <SettingDrawerModule title="model">
      <a-input v-model:value="config.model" />
    </SettingDrawerModule>
  </div>
</template>

<script setup lang="ts">
import SettingDrawerModule from '@/layout/components/SettingDrawerModule.vue'
import RenderItem from '@/components/hiForm/renders/RenderItem.vue'
import { formItemTypeDic } from '@/views/customPage/dic/formItemDic'
import { toRefs } from 'vue'
import { useFormSelect } from '@/components/hiForm'

const props = defineProps({
  config: {
    type: Object,
    required: true
  }
})

const { config } = toRefs(props)

const formItemType = useFormSelect('类型', 'type', {
  children: formItemTypeDic,
  style: { width: '100%' }
})
</script>

<style scoped lang="less"></style>
