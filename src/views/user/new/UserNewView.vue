<template>
  <div class="user-new-view" :key="route.name">
    <HiForm :controller="newUserForm">
      <template #content="{ formData, rules, controllerList }">
        <a-row :gutter="[20, 20]">
          <a-col :span="24" :lg="8">
            <div class="module-container user-avatar-module">
              <HiFormItem
                :config="controllerList[0]"
                :formData="formData"
                :rules="rules[controllerList[0].model]"
              />
            </div>
          </a-col>
          <a-col :span="24" :lg="16">
            <div class="module-container" style="padding-top: 40px">
              <HiFormItem
                v-for="controller in controllerList.filter((item) => item.model !== 'avatar')"
                :key="controller.key"
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

<script setup>
import HiForm from '@/components/hiForm/HiForm.vue'
import HiFormItem from '@/components/hiForm/HiFormItem'
import HiButton from '@/components/hiButton/HiButton.vue'
import { newUserForm, newUserButton, editUserButton } from './pageConfig.ts'
import { useRouter, useRoute } from 'vue-router'
import { UserManageAdd, UserManageDetail, UserManageUpdate } from '@/api/userManage.ts'
import { computed, watch } from 'vue'

const router = useRouter()
const route = useRoute()

const isEdit = computed(() => {
  return route.name === 'userEdit' && route.params.id
})

const getUserInfo = async () => {
  const result = await UserManageDetail(route.params.id)
  newUserForm.setFormData(
    result || {
      avatar: 'https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_23.jpg',
      name: '廖洋',
      email: 'p.eqbjreag@khbgss.qa',
      address: '江西省 吉安市 峡江县',
      role: 2
    }
  )
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

newUserButton.onClick(async () => {
  const formData = await newUserForm.validate()
  await UserManageAdd(formData)
  router.push({ name: 'user' })
})

editUserButton.onClick(async (controller) => {
  const formData = await newUserForm.validate()
  await UserManageUpdate(route.params.id, formData)
  router.push({ name: 'user' })
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
