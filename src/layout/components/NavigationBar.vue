<template>
  <div
    class="navigation-bar"
    :style="{ padding: appStore.navigationBarList.length ? '2px 40px 8px' : '' }"
  >
    <div class="bar-list">
      <div
        :class="{
          'bar-item': true,
          'bar-item-active': routeNameList.includes(item.name)
        }"
        v-for="item in appStore.navigationBarList"
        :key="item.name"
        @click="handleNavigationClick(item)"
      >
        {{ item.title }}
        <span class="close" @click="(e) => handleCloseClick(e, item.name)">
          <CloseOutlined />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CloseOutlined } from '@ant-design/icons-vue'
import { useAppStore } from '@/stores/app.ts'
import { useRoute, useRouter } from 'vue-router'
import { computed, watch } from 'vue'

const appStore = useAppStore()
const router = useRouter()
const route = useRoute()

const routeNameList = computed(() => {
  return route.matched.map((item) => item.name)
})

const handleNavigationClick = (item) => {
  router.push({ name: item.name, params: item.params, query: item.query })
}

const handleCloseClick = (e, name) => {
  e.stopPropagation()
  const index = appStore.findNavigationIndex(name)
  const item = appStore.navigationBarList[index - 1] ||
    appStore.navigationBarList[index + 1] || { name: 'home' }
  appStore.removeNavigation(name)
  handleNavigationClick(item)
}

watch(route, (value) => {
  appStore.addNavigation(appStore.generateNavigationItemByRoute(value))
})
</script>

<style scoped lang="less">
.navigation-bar {
  position: sticky;
  top: 64px;
  z-index: 99;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(6px);
  width: 100%;
  overflow-x: auto;
  .bar-list {
    display: flex;
    align-items: center;
    gap: 16px;
    .bar-item {
      background-color: #fff;
      padding: 6px 12px;
      border-radius: 4px;
      cursor: pointer;
      position: relative;
      white-space: nowrap;
      box-shadow:
        rgba(145, 158, 171, 0.2) 0 0 2px 0,
        rgba(145, 158, 171, 0.12) 0 4px 20px -4px;
      &:hover {
        .close {
          display: inline-block;
        }
      }
      .close {
        font-size: 10px;
        position: absolute;
        top: -8px;
        right: -8px;
        background-color: #fff;
        padding: 2px 5px;
        border-radius: 50%;
        color: var(--color-sub-content-text);
        display: none;
      }
    }
    .bar-item-active {
      color: var(--color-primary);
      background-color: var(--color-primary-bg);
    }
  }
}
</style>
