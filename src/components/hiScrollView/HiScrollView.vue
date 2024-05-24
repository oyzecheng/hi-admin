<template>
  <simplebar
    data-simplebar-auto-hide="false"
    :autoHide="true"
    :style="{
      maxHeight: typeof height === 'number' ? `${height}px` : height,
      maxWidth: typeof width === 'number' ? `${width}px` : width
    }"
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
  },
  width: {
    type: [Number, String],
    default: '100%'
  }
})

const { height } = props
</script>

<style>
.simplebar-scrollbar {
  transition: height 1s;
  margin: 2px;
  border-radius: 10px;
  &:before {
    display: none;
  }
}
.simplebar-track .simplebar-visible {
  background-color: #b5bcc3 !important;
}
</style>
