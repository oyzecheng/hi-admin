<template>
  <a-layout-header>
    <div class="search-box"></div>
    <div>
      <a-dropdown trigger="click" arrow>
        <a-avatar>Y</a-avatar>
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
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">
const outLogin = [{ key: 'outLogin', label: '退出登录' }]
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
  .ant-avatar {
    background-color: var(--color-primary);
    cursor: pointer;
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
</style>
