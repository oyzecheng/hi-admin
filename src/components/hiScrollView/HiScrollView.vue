<template>
  <simplebar
    data-simplebar-auto-hide="false"
    :style="{ maxHeight: typeof height === 'number' ? `${height}px` : height }"
  >
    <slot name="default"></slot>
  </simplebar>
</template>

<script setup>
import simplebar from 'simplebar-vue'
import 'simplebar-vue/dist/simplebar.min.css'

const props = defineProps({
  height: {
    type: [Number, String],
    default: 300
  }
})

const { height } = props
</script>

<style>
.simplebar-track {
  width: 10px !important;
}
.simplebar-scrollbar {
  transition: height 1s;
  width: 6px !important;
  margin: 0 2px;
  background-color: #b5bcc3 !important;
  border-radius: 10px;
  &:before {
    display: none;
  }
}
</style>
