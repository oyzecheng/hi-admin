<template>
  <div class="render-upload">
    <a-upload
      :file-list="type === 'avatar' ? [] : fileList"
      :list-type="['image', 'imageList'].includes(type) ? 'picture-card' : undefined"
      :custom-request="customRequest"
      :before-upload="beforeUpload"
      :multiple="multiple"
      @change="handleChange"
      @remove="handleRemove"
    >
      <UploadAvatar v-if="type === 'avatar'" :file-list="fileList" />
      <div
        v-else-if="
          ['image', 'imageList'].includes(type) &&
          (maxCount == undefined || (maxCount && fileList.length < maxCount))
        "
      >
        <PlusOutlined />
        <div style="margin-top: 8px">{{ uploadText || 'Upload' }}</div>
      </div>
      <HiButton v-if="type === 'file'" :controller="uploadButton" />
    </a-upload>
    <pre class="placeholder">{{ placeholder }}</pre>
  </div>
</template>

<script setup lang="ts">
import HiButton from '@/components/hiButton/HiButton.vue'
import { computed, h, type PropType, toRefs } from 'vue'
import { HiFormUploadController } from '@/components/hiForm/controller/hiFormUploadController'
import { PlusOutlined, UploadOutlined } from '@ant-design/icons-vue'
import UploadAvatar from '@/components/hiForm/renders/renderUpload/UploadAvatar.vue'
import type { IFormUploadItem } from '@/components/hiForm/types'
import { message } from 'ant-design-vue'
import { generateKey, validateFileType } from '@/utils'
import { useHiButton } from '@/components/hiButton'
import { UploadFile } from '@/api/common'

const props = defineProps({
  controller: {
    type: HiFormUploadController,
    required: true
  },
  value: {
    type: Array as PropType<IFormUploadItem[]>
  }
})

const { controller, value } = toRefs(props)
const config = controller.value?.getConfig()
const {
  type,
  onChange,
  placeholder,
  maxSize,
  maxSizeErrorMessage,
  accept,
  acceptErrorMessage,
  maxCount,
  multiple,
  maxCountError,
  uploadText,
  onUploadError,
  onUploadSuccess
} = config

const fileList = computed<IFormUploadItem[]>(() => value?.value || [])
const uploadButton = useHiButton(uploadText || 'Upload', { icon: h(UploadOutlined) })

const handleChange = () => {
  onChange && onChange(fileList)
}

const getFileListItemById = (id: string) => fileList.value.find((item) => item.id === id)

const customRequest = (e: any) => {
  if (maxCount && fileList.value.length >= maxCount && type !== 'avatar') {
    maxCountError && message.error(maxCountError)
    return false
  }

  // 这里添加上传代码
  const formData = new FormData()
  formData.append('file', e.file)
  formData.append('type', type)
  const id = generateKey()
  const data: IFormUploadItem = { id, status: 'uploading', name: e.file.name, url: '' }
  if (type === 'avatar') {
    fileList.value[0] = data
  } else {
    fileList.value.push(data)
  }
  UploadFile(formData)
    .then((res) => {
      const item = getFileListItemById(id)
      if (item) {
        item.status = 'success'
        item.url = res.data.url
        onUploadSuccess && onUploadSuccess(item)
      }
    })
    .catch((err) => {
      const item = getFileListItemById(id)
      if (item) {
        item.status = 'error'
        onUploadError && onUploadError(item, err)
      }
    })
    .finally(() => {
      controller.value.validate?.()
    })
}
const beforeUpload = (file: File) => {
  const { size } = file

  if (accept && !validateFileType(file, accept)) {
    message.error(acceptErrorMessage || `文件不是${accept}类型`)
    return false
  }

  if (maxSize && size > maxSize * 1024) {
    message.error(maxSizeErrorMessage || `文件超过${maxSize}Kb`)
    return false
  }

  return true
}

const handleRemove = (file: IFormUploadItem) => {
  const { id } = file
  fileList.value.splice(
    fileList.value.findIndex((item: IFormUploadItem) => item.id === id),
    1
  )
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
