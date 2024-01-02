<template>
  <a-table :columns="columns" :data-source="tableData.list" v-bind="config" :loading="loading">
    <template #bodyCell="{ column, record }">
      <template v-if="column.buttonConfigList && column.buttonConfigList.length">
        <HiButtonList :config-list="column.buttonConfigList" :click-params="{ record }" />
      </template>
      <slot name="bodyCell" :column="column" :record="record" />
    </template>
    <template #headerCell="{ column }">
      <slot name="headerCell" :column="column" />
    </template>
    <template #buildOptionText="props">
      <span v-if="props.value !== '50'">{{ props.value }}条/页</span>
      <span v-else>全部</span>
    </template>
  </a-table>
</template>

<script setup lang="ts">
import HiButtonList from '@/components/hiButton/HiButtonList.vue'
import { HiTableController } from '@/components/hiTable/controller/hiTableController'
import { onMounted } from 'vue'

const props = defineProps({
  controller: {
    type: HiTableController,
    required: true
  }
})

const { controller } = props
const { tableData } = controller
const columns = controller?.getColumns()
const config = controller?.getConfig()
const { pagination } = config
const { current, pageSize } = pagination || {}

const { loading } = config

onMounted(() => {
  controller?.reloadData({ page: current || 1, pageSize: pageSize || 10 })
})
</script>

<style scoped></style>
