<template>
  <a-table :columns="columns" :data-source="tableData.list">
    <template #bodyCell="{ column, record }">
      <template v-if="column.buttonConfigList && column.buttonConfigList.length">
        <HiButtonList :config-list="column.buttonConfigList" :click-params="{ record }" />
      </template>
      <slot name="bodyCell" :column="column" :record="record" />
    </template>
    <template #headerCell="{ column }">
      <slot name="headerCell" :column="column" />
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
const { tableData, columns } = controller

onMounted(() => {
  controller?.reloadData()
})
</script>

<style scoped></style>
