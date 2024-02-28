<template>
  <a-row class="week-date" :gutter="[20, 20]">
    <a-col :lg="8" :span="24">
      <WeekDataItem
        title="销售量"
        :count="371"
        :percentage="2.4"
        :series="[{ name: '', data: [10, 98, 32, 20, 67, 81] }]"
      />
    </a-col>
    <a-col :lg="8" :span="24">
      <WeekDataItem
        title="余额"
        :count="948"
        :percentage="-1.5"
        :series="[{ name: '', data: [964, 749, 602, 1102, 950, 948] }]"
        :gradient-to-colors="['#60F2F3']"
        :colors="['#00B8D9']"
      />
    </a-col>
    <a-col :lg="8" :span="24">
      <WeekDataItem
        title="销售利润"
        :count="3419"
        :percentage="0.6"
        :series="[{ name: '', data: [19, 375, 51, 129, 67, 12] }]"
        :gradient-to-colors="['#FFD567']"
        :colors="['#FFAB00']"
      />
    </a-col>
  </a-row>
</template>

<script setup>
import WeekDataItem from '@/views/home/components/WeekDataItem.vue'
</script>

<style scoped lang="less">
.week-date {
  margin-bottom: 20px;
}
</style>
