<template>
  <a-layout-sider :width="280" theme="light">
    <HiScrollView height="100%" style="padding: 0 10px">
      <div class="logo"></div>
      <a-menu
        :items="items"
        @click="handleMenuClick"
        mode="inline"
        v-model:selectedKeys="state.selectedKeys"
        v-model:open-keys="state.openKeys"
      />
    </HiScrollView>
  </a-layout-sider>
</template>

<script setup>
import HiScrollView from '@/components/hiScrollView/HiScrollView.vue'
import { useRoute, useRouter } from 'vue-router'
import { useMenuItems } from '@/router/hooks/useMenuItems.ts'
import { reactive, watch } from 'vue'

const router = useRouter()
const route = useRoute()
const items = useMenuItems()
const state = reactive({
  selectedKeys: [],
  openKeys: []
})

watch(
  () => route.name,
  (value) => {
    state.selectedKeys = [value]
    state.openKeys = findOpenKeysByName(value)
  }
)

const handleMenuClick = ({ key, item }) => {
  const params = item.path.includes(':id') ? { id: 'abc' } : undefined
  router.push({ name: key, params })
}
const findOpenKeysByName = (name) => {
  const findKey = (item, keys) => {
    keys.push(item.key)
    if (item.key === name) {
      return keys
    }
    if (item.children?.length) {
      for (const row of item.children) {
        const result = findKey(row, [...keys])
        if (result) return result
      }
    }
    return null
  }

  for (const item of items) {
    const result = findKey(item, [])
    if (result) {
      return result
    }
  }

  return []
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
