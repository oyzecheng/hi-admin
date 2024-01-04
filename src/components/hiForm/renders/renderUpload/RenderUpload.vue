<template>
  <div class="render-upload">
    <a-upload
      :file-list="type === 'avatar' ? [] : fileList"
      :custom-request="customRequest"
      :before-upload="beforeUpload"
      @change="handleChange"
    >
      <UploadAvatar :file-list="fileList" />
    </a-upload>
    <pre class="placeholder">{{ placeholder }}</pre>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { HiFormUploadController } from '@/components/hiForm/controller/hiFormUploadController'
import UploadAvatar from '@/components/hiForm/renders/renderUpload/UploadAvatar.vue'
import type { TFormData } from '@/components/hiForm/types'

const props = defineProps({
  controller: {
    type: HiFormUploadController,
    required: true
  },
  formData: {
    type: Object as PropType<TFormData>,
    required: true
  }
})

const { controller, formData } = props
const config = controller.getConfig()
const { type, onChange, placeholder } = config

const fileList = computed(() => formData[controller.model])

const handleChange = () => {
  onChange && onChange(fileList)
}

const customRequest = () => {
  const item = {
    id: 1,
    url: 'https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_17.jpg'
  }
  fileList.value.push(item)
}
const beforeUpload = () => {}
</script>

<style scoped lang="less">
.render-upload {
  .placeholder {
    color: var(--color-sub-content-text);
    font-size: 12px;
    margin-top: 12px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
}
</style>
