<template>
  <SvgIcon type="mdi" :path="path" />
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon'
import { toRefs } from 'vue'

const props = defineProps({
  path: {
    type: Object,
    default: null
  }
})

const { path } = toRefs(props)
</script>

<style scoped></style>
