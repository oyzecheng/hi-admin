<template>
  <div class="user-new-view" :key="route.path">
    <HiForm :controller="newUserForm" :button-config="null">
      <template #content="{ formData, rules, controllerList }">
        <a-row :gutter="[20, 20]">
          <a-col :span="24" :lg="8">
            <div class="module-container user-avatar-module">
              <HiFormItem :config="controllerList[0]" :formData="formData" :rules="rules" />
            </div>
          </a-col>
          <a-col :span="24" :lg="16">
            <div class="module-container" style="padding-top: 40px">
              <HiFormItem
                v-for="controller in controllerList.filter(
                  (item) => !Array.isArray(item) && item.model !== 'avatar'
                )"
                :key="controller"
                :formData="formData"
                :rules="rules"
                :config="controller"
              />
              <a-form-item :wrapper-col="{ offset: 4 }">
                <HiButton :controller="isEdit ? editUserButton : newUserButton" />
              </a-form-item>
            </div>
          </a-col>
        </a-row>
      </template>
    </HiForm>
  </div>
</template>

<script setup lang="ts">
import HiForm from '@/components/hiForm/HiForm.vue'
import HiFormItem from '@/components/hiForm/HiFormItem'
import HiButton from '@/components/hiButton/HiButton.vue'
import { newUserForm, newUserButton, editUserButton } from './pageConfig'
import { useRouter, useRoute } from 'vue-router'
import { UserManageAdd, UserManageDetail, UserManageUpdate } from '@/api/userManage'
import { computed, watch } from 'vue'
import { getParamsId } from '@/utils/index.js'

const router = useRouter()
const route = useRoute()

const isEdit = computed(() => {
  return route.name === 'userEdit' && route.params.id
})

const getUserInfo = async () => {
  const { data } = await UserManageDetail(getParamsId(route))
  newUserForm.setFormData(data)
}
watch(
  () => route.name,
  () => {
    if (isEdit.value) {
      getUserInfo()
    }
  },
  { immediate: true }
)

newUserButton.onClick(async (controller) => {
  const formData = await newUserForm.validate()
  controller.showLoading()
  try {
    await UserManageAdd(formData)
    router.push({ name: 'user' })
  } finally {
    controller.hideLoading()
  }
})

editUserButton.onClick(async (controller) => {
  const formData = await newUserForm.validate()
  controller.showLoading()
  try {
    await UserManageUpdate(getParamsId(route), formData)
    router.push({ name: 'user' })
  } finally {
    controller.hideLoading()
  }
})
</script>

<style scoped lang="less">
.user-new-view {
  .user-avatar-module {
    text-align: center;
    padding: 40px 20px;
  }
}
</style>
