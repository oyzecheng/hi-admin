<template>
  <div class="search-modal-content">
    <div class="search-input">
      <a-input placeholder="搜索..." @change="handleInputChange" allow-clear>
        <template #prefix>
          <SearchOutlined style="padding-right: 10px" />
        </template>
      </a-input>
    </div>
    <HiScrollView class="list" height="60vh">
      <div
        class="item"
        v-for="item in state.menuFlatList"
        :key="item.key"
        @click="handleMenuClick(item.key)"
      >
        <div>
          <p class="menu-name" v-html="item.label"></p>
          <p class="menu-path" v-html="item.path"></p>
        </div>
        <a-tag v-if="item.parentLabel" color="blue" :bordered="false">
          {{ item.parentLabel }}
        </a-tag>
      </div>
    </HiScrollView>
  </div>
</template>

<script setup>
import HiScrollView from '@/components/hiScrollView/HiScrollView.vue'
import { SearchOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
import { debounce, flattenTree } from '@/utils'
import { useMenuItems } from '@/router/hooks/useMenuItems'
import { reactive } from 'vue'

const router = useRouter()
const emit = defineEmits(['onMenuClick'])

const menuFlatList = flattenTree(useMenuItems())

const state = reactive({
  menuFlatList: [...menuFlatList]
})

const handleMenuClick = (name) => {
  router.push({ name })
  emit('onSearchMenuClick')
}

const handleInputChange = debounce((e) => {
  const value = e.target.value
  if (value) {
    state.menuFlatList = filterMenuListByLabel(value, menuFlatList)
  } else {
    state.menuFlatList = [...menuFlatList]
  }
}, 300)

const filterMenuListByLabel = (val, list) => {
  return list.filter((item) => {
    const { label, path, parentLabel } = item
    return label.includes(val) || parentLabel.includes(val) || path.includes(val)
  })
}
</script>

<style scoped>
.search-modal-content {
  border-radius: 20px;
  overflow: hidden;
  .search-input {
    border-bottom: 1px solid var(--color-border);
    padding: 22px 20px;
    .ant-input-affix-wrapper {
      border: none;
      outline: none;
      box-shadow: none;
      font-size: 18px;
      &:focus {
        box-shadow: none;
      }
    }
  }
  .list {
    padding: 20px;
    .item {
      border: 1px dashed transparent;
      border-bottom-color: var(--color-border);
      padding: 8px 20px;
      cursor: pointer;
      transition: all 0.1s ease-in;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &:hover {
        border-radius: 10px;
        border: 1px dashed var(--color-primary);
        background-color: var(--color-hover-primary-bg);
      }
      .menu-name {
        color: var(--color-text);
        font-weight: 500;
      }
      .menu-path {
        color: var(--color-content-text);
        font-size: 12px;
      }
    }
  }
}
</style>
