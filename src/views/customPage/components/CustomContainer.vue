<template>
  <a-dropdown :trigger="['contextmenu']">
    <slot></slot>
    <template #overlay>
      <div class="custom-container-dropdown-container">
        <a-menu @click="handleMenuClick">
          <a-menu-item key="1">编辑</a-menu-item>
          <a-menu-item key="2" style="color: var(--color-error)">删除</a-menu-item>
        </a-menu>
      </div>
    </template>
  </a-dropdown>
</template>

<script setup>
const emits = defineEmits(['onEdit', 'onDel'])

const handleMenuClick = ({ key }) => {
  switch (key) {
    case '1':
      emits('onEdit')
      return
    case '2':
      emits('onDel')
      return
  }
}
</script>

<style lang="less">
@import '@/assets/css/common';

.custom-container-dropdown-container {
  .image-bg();
  .ant-dropdown-menu {
    background-color: transparent;
  }
}
</style>
