<template>
  <div class="hi-table">
    <a-table
      :columns="columns"
      :data-source="tableData.list"
      v-bind="config"
      :loading="loading"
      :pagination="false"
    >
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
    <div class="hi-table-bottom">
      <div class="selected-container">
        <span class="text">已选中 45 项</span>
        <HiButtonList :config-list="selectedContainerButtonControllers" />
      </div>
      <a-pagination v-bind="pagination" />
    </div>
  </div>
</template>

<script setup lang="ts">
import HiButtonList from '@/components/hiButton/HiButtonList.vue'
import { HiTableController } from '@/components/hiTable/controller/hiTableController'
import { onMounted, toRefs } from 'vue'

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
const selectedContainerButtonControllers = controller?.getSelectedContainerButtonControllers()
const { pagination } = toRefs(config)
const { current, pageSize } = pagination?.value || {}

const { loading } = config

onMounted(() => {
  controller?.reloadData({ page: current || 1, pageSize: pageSize || 10 })
})
</script>

<style scoped lang="less">
.hi-table {
  .hi-table-bottom {
    display: flex;
    border-top: 1px dashed var(--color-border);
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px 20px 0;
    .selected-container {
      margin-bottom: 20px;
      color: var(--color-primary);
      font-weight: bold;
      .text {
        margin-right: 20px;
      }
    }
    .ant-pagination {
      margin-bottom: 20px;
    }
  }
}
</style>
