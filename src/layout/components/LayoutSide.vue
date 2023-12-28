<template>
  <a-layout-sider :width="280" theme="light">
    <div class="logo"></div>
    <a-menu
      :items="items"
      @click="handleMenuClick"
      mode="inline"
      v-model:selectedKeys="state.selectedKeys"
    />
  </a-layout-sider>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useMenuItems } from '@/router/hooks/useMenuItems.ts'
import { reactive, watch } from 'vue'

const router = useRouter()
const route = useRoute()
const items = useMenuItems()
const state = reactive({
  selectedKeys: []
})

watch(
  () => route.name,
  (value) => {
    state.selectedKeys = [value]
  }
)

const handleMenuClick = ({ key, item }) => {
  const params = item.path.includes(':id') ? { id: 'abc' } : undefined
  router.push({ name: key, params })
}
</script>

<style scoped lang="less">
.ant-layout-sider {
  border-right: 1px dashed var(--color-border);
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  .logo {
    height: 32px;
    background: var(--color-primary);
    margin: 16px;
  }
  .ant-menu {
    border: none;
  }
}
</style>
