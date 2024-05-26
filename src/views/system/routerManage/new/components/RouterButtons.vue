<template>
  <div class="router-buttons">
    <div class="item" v-for="item in value" :key="item.key">
      <a-form-item-rest>
        <a-input placeholder="请输入按钮名称" v-model:value="item.name" />
      </a-form-item-rest>
      <CloseOutlined @click="handleRemove(item.key)" />
    </div>
    <a-button block @click="handleAdd">添加</a-button>
  </div>
</template>

<script setup lang="ts">
import { CloseOutlined } from '@ant-design/icons-vue'
import { type PropType, toRefs } from 'vue'
import { generateKey } from '@/utils'

interface IRouterButton {
  key: string
  name: string
}
const props = defineProps({
  value: {
    type: Array as PropType<IRouterButton[]>,
    default: () => []
  }
})
const { value } = toRefs(props)

const emits = defineEmits(['update:value'])

const handleAdd = () => {
  emits('update:value', [...value.value, { key: generateKey(), name: '' }])
}
const handleRemove = (key: string) => {
  emits(
    'update:value',
    value.value.filter((item) => item.key !== key)
  )
}
</script>

<style scoped lang="less">
.router-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  .item {
    display: flex;
    .anticon {
      padding: 10px;
      cursor: pointer;
      color: var(--color-sub-content-text);
    }
  }
}
</style>
