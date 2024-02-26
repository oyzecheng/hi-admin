<template>
  <VueApexCharts
    ref="chartsRef"
    type="line"
    :height="height"
    :series="series"
    :options="chartOptions"
  />
</template>

<script setup>
import VueApexCharts from 'vue3-apexcharts'
import { useAppStore } from '@/stores/app.ts'
import { ref, toRefs, watch } from 'vue'
import { useChartColors } from '@/components/hiCharts/hooks/useChartColors.ts'

const props = defineProps({
  height: {
    type: [Number, String],
    default: 350
  },
  series: {
    type: Array,
    default: () => []
  },
  options: {
    type: Object,
    default: () => ({})
  }
})

const { height, series, options } = toRefs(props)
const chartsRef = ref(null)
const appStore = useAppStore()

const chartOptions = {
  chart: {
    height: 350,
    type: 'line',
    toolbar: false
  },
  dataLabels: {
    enabled: false
  },
  colors: useChartColors(),
  stroke: {
    curve: 'smooth',
    width: 2
  },
  xaxis: {
    type: 'date',
    categories: []
  },
  tooltip: {
    x: {
      format: 'yyyy-MM-dd'
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right'
  },
  ...options.value
}

watch(
  () => appStore.themeColor,
  () => {
    updateOptions({ colors: useChartColors() })
  }
)

watch(
  () => options,
  () => {
    updateOptions(options)
  }
)

const updateOptions = (options) => {
  chartsRef.value.chart.updateOptions(options)
}
</script>

<style scoped lang="less"></style>
