<template>
  <a-layout-sider
    :style="{ left: appStore.isLgLayout ? (appStore.lgLayoutSideShow ? '0px' : '-280px') : '0px' }"
    :collapsed="appStore.sideCollapsible"
    :defaultCollapsed="true"
    :trigger="null"
    :width="280"
    theme="light"
    collapsible
    :collapsedWidth="appStore.isLgLayout ? 280 : 80"
    @breakpoint="handleBreakpoint"
    breakpoint="xl"
  >
    <HiScrollView height="100%" style="padding: 0 10px">
      <div class="logo">
        {{ !appStore.sideCollapsible ? 'Hi-Admin' : 'Hi' }}
      </div>
      <a-menu
        :items="userStore.info.userMenus"
        @click="handleMenuClick"
        mode="inline"
        v-model:selectedKeys="state.selectedKeys"
        v-model:open-keys="state.openKeys"
      />
    </HiScrollView>
    <div v-if="!appStore.isLgLayout" class="side-controller" @click="handleSideController">
      <LeftOutlined v-if="!appStore.sideCollapsible" />
      <RightOutlined v-else />
    </div>
  </a-layout-sider>
</template>

<script setup>
import HiScrollView from '@/components/hiScrollView/HiScrollView.vue'
import { LeftOutlined, RightOutlined } from '@ant-design/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import { reactive, watch } from 'vue'
import { useAppStore } from '@/stores/app.ts'
import { useUserStore } from '@/stores/user.ts'

const router = useRouter()
const route = useRoute()
const appStore = useAppStore()
const userStore = useUserStore()
const state = reactive({
  selectedKeys: [],
  openKeys: []
})

const handleSideController = () => {
  appStore.setSideCollapsible(!appStore.sideCollapsible)
}

const handleBreakpoint = (val) => {
  appStore.setIsLgLayout(val)
  appStore.setLgLayoutSideShow(!val)
}

const handleMenuClick = ({ key }) => {
  router.push({ name: key })
  appStore.setLgLayoutSideShow()
}

watch(
  () => route.name,
  () => {
    const nameList = route.matched.filter((item) => item.name).map((item) => item.name)
    state.selectedKeys = nameList
    state.openKeys = nameList
  },
  { immediate: true }
)
</script>

<style scoped lang="less">
.ant-layout-sider {
  border-right: 1px dashed var(--color-border);
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  .logo {
    height: 32px;
    margin: 16px;
    color: var(--color-primary);
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }
  .ant-menu {
    border: none;
  }
  .side-controller {
    position: absolute;
    z-index: 999;
    right: -13px;
    top: 66px;
    border: 1px dashed var(--color-border);
    width: 26px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    border-radius: 100px;
    cursor: pointer;
    color: var(--color-content-text);
    font-size: 12px;
    background-color: #fff;
  }
}
</style>
