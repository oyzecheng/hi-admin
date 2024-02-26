<template>
  <VueApexCharts
    type="donut"
    ref="chartsRef"
    :series="series"
    :options="chartOptions"
    width="100%"
    :height="height"
  />
</template>

<script setup>
import VueApexCharts from 'vue3-apexcharts'
import { useChartColors } from '@/components/hiCharts/hooks/useChartColors.ts'
import { ref, toRefs, watch } from 'vue'
import { useAppStore } from '@/stores/app.ts'

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
const appStore = useAppStore()
const chartsRef = ref(null)

const chartOptions = {
  chart: {
    width: 380,
    type: 'donut'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 4
  },
  colors: useChartColors(),
  tooltip: {
    fillSeriesColor: false,
    theme: 'light'
  },
  legend: {
    position: 'bottom'
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            show: true,
            label: 'Total',
            color: '#637481'
          }
        },
        size: '88%'
      }
    }
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

<style lang="less"></style>
