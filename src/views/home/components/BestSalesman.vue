<template>
  <HomeModule class="best-salesman" title="最佳销售">
    <HiTable :controller="tableController">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'name'">
          <div>
            <a-avatar :src="record.avatar" />
            <span style="margin-left: 10px">{{ record.name }}</span>
          </div>
        </template>
        <template v-if="column.key === 'rank'">
          <span :class="['rank', `rank-${record.rank}`]">Top {{ record.rank }}</span>
        </template>
      </template>
    </HiTable>
  </HomeModule>
</template>

<script setup>
import HomeModule from '@/views/home/components/HomeModule.vue'
import HiTable from '@/components/hiTable/HiTable.vue'
import { useHiTable } from '@/components/hiTable/hooks/useHiTable.ts'
import { BestSalesman } from '@/api/home.ts'

const tableController = useHiTable(
  [
    { title: '销售员', key: 'name' },
    { title: '产品', key: 'product' },
    { title: '总销售额', key: 'price', customRender: ({ value }) => `¥${value}` },
    { title: '排名', key: 'rank' }
  ],
  { pagination: false, scroll: { x: '100%' } }
)

tableController.setLoadData(BestSalesman)
</script>

<style scoped lang="less">
.best-salesman {
  .rank {
    background-color: var(--color-primary-bg);
    border-radius: 4px;
    padding: 4px 6px;
    font-weight: bold;
    color: var(--color-primary);
    font-size: 12px;
    &-2 {
      color: var(--color-success);
      background-color: var(--color-success-bg);
    }
    &-3 {
      color: var(--color-blue);
      background-color: var(--color-blue-bg);
    }
    &-4 {
      color: var(--color-warning);
      background-color: var(--color-warning-bg);
    }
    &-5 {
      color: var(--color-error);
      background-color: var(--color-error-bg);
    }
  }
}
</style>
