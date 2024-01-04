<template>
  <div class="upload-avatar">
    <a-avatar v-if="fileList.length" size="large" :src="avatarSrc" />
    <div v-else class="no-avatar">
      <CameraFilled />
      <p>上传照片</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CameraFilled } from '@ant-design/icons-vue'
import { computed } from 'vue'

const props = defineProps({
  fileList: {
    type: Array,
    required: true
  }
})

const { fileList } = props

const avatarSrc = computed(() => {
  return fileList[0]?.url || ''
})
</script>

<style scoped lang="less">
.upload-avatar {
  border: 1px dashed var(--color-border);
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  width: 150px;
  height: 150px;
  transition: all 0.2s ease-out;
  &:hover {
    opacity: 0.8;
  }
  .ant-avatar {
    width: 100%;
    height: 100%;
  }
  .no-avatar {
    color: var(--color-content-text);
    background-color: #f7f7f8;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .anticon {
      font-size: 30px;
    }
    p {
      margin-top: 6px;
    }
  }
}
</style>
