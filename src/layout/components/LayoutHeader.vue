<template>
  <a-layout-header>
    <div class="search-box">
      <a-button type="dashed" shape="circle" :icon="h(SearchOutlined)" @click="handleSearchClick" />
    </div>
    <div>
      <a-dropdown trigger="click" arrow v-model:open="state.menuOpen">
        <div :class="{ avatar: true, 'avatar-active': state.menuOpen }">
          <a-avatar>Y</a-avatar>
        </div>
        <template #overlay>
          <div class="user-container">
            <div class="info">
              <h6>Jaydon Frankie</h6>
              <p>demo@minimals.cc</p>
            </div>
            <a-divider dashed style="border-color: var(--color-border); margin: 5px" />
            <a-menu class="out-login-menu" :items="outLogin"></a-menu>
          </div>
        </template>
      </a-dropdown>
      <!-- search -->
      <a-modal
        class="search-modal"
        v-model:open="state.searchBoxOpen"
        :footer="null"
        :closable="false"
        :width="600"
      >
        <SearchModalContent @onMenuClick="handleMenuClick" />
      </a-modal>
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">
import SearchModalContent from '@/layout/components/SearchModalContent.vue'
import { SearchOutlined } from '@ant-design/icons-vue'
import { reactive, h } from 'vue'

const outLogin = [{ key: 'outLogin', label: '退出登录' }]

const state = reactive({
  menuOpen: false,
  searchBoxOpen: false
})

const handleSearchClick = () => {
  state.searchBoxOpen = true
}
const handleMenuClick = () => {
  state.searchBoxOpen = false
}
</script>

<style scoped lang="less">
.ant-layout-header {
  background-color: #eee;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.8);
  transition: height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  .search-box {
    .ant-btn {
      background-color: transparent;
    }
  }
  .avatar {
    border: 2px solid var(--color-hover-bg);
    border-radius: 50%;
    cursor: pointer;
    width: 40px;
    height: 40px;
    position: relative;
    transition: all 0.3s ease-out;
    &:hover {
      transform: scale(1.06);
    }
    .ant-avatar {
      top: 2px;
      left: 2px;
      display: inline-block;
      position: absolute;
      background-color: var(--color-primary);
    }
    &-active {
      border-color: var(--color-primary);
    }
  }
}
</style>
<style lang="less">
.user-container {
  padding: 8px;
  min-width: 220px;
  color: var(--color-content-text);
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow:
    rgba(145, 158, 171, 0.24) 0px 0px 2px 0px,
    rgba(145, 158, 171, 0.24) -20px 20px 40px -4px;
  .info {
    padding: 10px 16px;
    h6 {
      color: var(--color-text);
      font-size: 14px;
      font-weight: 500;
    }
  }
  .out-login-menu {
    box-shadow: none;
    .ant-dropdown-menu-title-content {
      color: var(--color-error);
      font-weight: 500;
    }
  }
}
.search-modal {
  .ant-modal-content {
    padding: 0;
  }
}
</style>
