<template>
  <div class="setting-drawer-module">
    <p class="title">{{ title }}</p>
    <div class="module-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})

const { title } = props
</script>

<style scoped lang="less">
.setting-drawer-module {
  padding: 10px 0;
  .title {
    color: var(--color-sub-content-text);
    font-weight: 500;
  }
  .module-content {
    padding-top: 10px;
  }
}
</style>
