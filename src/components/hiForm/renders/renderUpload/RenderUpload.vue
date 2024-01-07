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
import { message } from 'ant-design-vue'
import { validateFileType } from '@/utils'

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
const { type, onChange, placeholder, maxSize, maxSizeErrorMessage, accept, acceptErrorMessage } = config

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
const beforeUpload = (file: File) => {
  console.log(file)
  const { size, type } = file
  if (maxSize && size > maxSize * 1024) {
    message.error(maxSizeErrorMessage || `文件超过${maxSize}Kb`)
    return false
  }

  if (accept && !validateFileType(type, accept)) {
    message.error(acceptErrorMessage || `文件不是${accept}类型`)
    return false
  }

  return true
}
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
