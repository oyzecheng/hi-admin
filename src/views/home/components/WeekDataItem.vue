<template>
  <div class="module-container week-data-item">
    <p class="title">{{ title }}</p>
    <div class="box">
      <p class="count">{{ count }}</p>
      <LineCharts
        :series="series"
        height="90"
        width="70%"
        :options="lineChartOptions"
        :watch-theme-color="false"
      />
    </div>
    <div class="bottom">
      <HiIcon :class="['icon', percentage < 0 ? 'icon-low' : '']" :path="renderIcon" />
      <span class="percentage">{{ renderPercentage }}%</span>
      <span class="text">比上周</span>
    </div>
  </div>
</template>

<script setup>
import LineCharts from '@/components/hiCharts/LineCharts.vue'
import HiIcon from '@/components/hiIcon/HiIcon.vue'
import { mdiTrendingUp, mdiTrendingDown } from '@mdi/js'
import { computed, toRefs } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  count: {
    type: Number,
    default: 0
  },
  percentage: {
    type: Number,
    default: 0
  },
  series: {
    type: Array,
    default: () => []
  },
  gradientToColors: {
    type: Array,
    default: () => ['#5AE39A']
  },
  colors: {
    type: Array,
    default: () => ['#09A971']
  }
})

const { series, title, count, percentage, gradientToColors, colors } = toRefs(props)

const renderPercentage = computed(() => {
  if (percentage.value === 0 || percentage.value < 0) return percentage.value

  return `+${percentage.value}`
})

const renderIcon = computed(() => {
  if (percentage.value === 0) return null

  if (percentage.value > 0) {
    return mdiTrendingUp
  }
  return mdiTrendingDown
})

const lineChartOptions = {
  xaxis: {
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      show: true
    },
    tooltip: {
      enabled: false
    }
  },
  grid: {
    show: false,
    padding: {
      top: -10,
      bottom: -10,
      left: -2,
      right: -2
    }
  },
  yaxis: {
    show: false
  },
  tooltip: {
    x: {
      show: false
    }
  },
  colors: colors.value,
  chart: {
    toolbar: false
  },
  fill: {
    type: 'gradient',
    gradient: {
      gradientToColors: gradientToColors.value,
      type: 'vertical'
    }
  }
}
</script>

<style scoped lang="less">
.week-data-item {
  .title {
    font-size: 16px;
  }
  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .count {
      font-weight: bold;
      font-size: 34px;
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    gap: 10px;
    .icon {
      background-color: var(--color-success-bg);
      color: var(--color-success);
      border-radius: 50%;
      padding: 4px;
    }
    .icon-low {
      background-color: var(--color-error-bg);
      color: var(--color-error);
    }
    .percentage {
      font-weight: bold;
    }
    .text {
      color: var(--color-content-text);
    }
  }
}
</style>
