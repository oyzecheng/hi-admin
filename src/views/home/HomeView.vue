<template>
  <div class="home-view">
    <WeekData />
    <a-row :gutter="[20, 20]">
      <a-col :lg="16" :span="24">
        <HomeModule title="下载量">
          <LineCharts :series="series" :options="lineOptions" :height="300" />
        </HomeModule>
      </a-col>
      <a-col :lg="8" :span="24">
        <HomeModule title="安装量">
          <PieCharts :series="pieSeries" :options="pieOptions" />
        </HomeModule>
      </a-col>
    </a-row>
    <a-row style="margin-top: 20px" :gutter="[20, 20]">
      <a-col :lg="16" :span="24">
        <BestSalesman />
      </a-col>
      <a-col :lg="8" :span="24">
        <SellWellProducts />
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import HomeModule from '@/views/home/components/HomeModule.vue'
import LineCharts from '@/components/hiCharts/LineCharts.vue'
import PieCharts from '@/components/hiCharts/PieCharts.vue'
import BestSalesman from '@/views/home/components/BestSalesman.vue'
import SellWellProducts from '@/views/home/components/SellWellProducts.vue'
import WeekData from '@/views/home/components/WeekData.vue'

const series = [
  {
    name: 'Mac',
    data: [31, 40, 28, 51, 42, 109, 100]
  },
  {
    name: 'Window',
    data: [11, 32, 45, 32, 34, 52, 41]
  }
]
const lineOptions = {
  xaxis: {
    type: 'date',
    categories: [
      '2024-02-10',
      '2024-02-11',
      '2024-02-12',
      '2024-02-13',
      '2024-02-14',
      '2024-02-15',
      '2024-02-16'
    ]
  }
}

const pieSeries = [443, 551, 137, 338]
const pieOptions = {
  labels: ['Mac', 'Window', 'IOS', 'Android']
}
</script>

<style scoped lang="less"></style>
