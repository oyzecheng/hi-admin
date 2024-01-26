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
      <div>
        <div class="selected-container" v-if="selectedRowKeys && selectedRowKeys.length">
          <span class="text">已选中 {{ selectedRowKeys.length }} 项</span>
          <HiButtonList :config-list="selectedContainerButtonControllers" />
        </div>
      </div>
      <a-pagination v-if="config.pagination" v-bind="config.pagination" />
    </div>
  </div>
</template>

<script setup lang="ts">
import HiButtonList from '@/components/hiButton/HiButtonList.vue'
import { HiTableController } from '@/components/hiTable/controller/hiTableController'
import { onMounted, type PropType, toRefs } from 'vue'
import type { TButtonController } from '@/components/hiButton/types'

const props = defineProps({
  controller: {
    type: HiTableController,
    required: true
  },
  selectedContainerButtonControllers: {
    type: Array as PropType<TButtonController[]>,
    default: () => []
  }
})

const { controller } = props
controller?.init()
const { tableData } = controller
const columns = controller?.getColumns()
const config = controller?.getConfig()
const selectedData = controller?.getSelectedData()
const { current, pageSize } = config.pagination || {}
const { selectedRowKeys } = toRefs(selectedData)

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
