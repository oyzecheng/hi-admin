<template>
  <div class="home-module module-container">
    <p class="home-module-title">{{ title }}</p>
    <slot name="default" />
  </div>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})

const { title } = toRefs(props)
</script>

<style scoped lang="less">
.home-module {
  &-title {
    color: var(--color-text);
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 20px;
  }
}
</style>
