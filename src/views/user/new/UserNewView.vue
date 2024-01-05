<template>
  <div class="user-new-view">
    <HiForm :controller="newUserForm">
      <template #content="{ formData, rules, controllerList }">
        <a-row :gutter="[20, 20]">
          <a-col :span="24" :lg="8">
            <div class="module-container user-avatar-module">
              <HiFormItem
                :controller="controllerList[0]"
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
                :rules="rules[controller.model]"
                :controller="controller"
              />
              <a-form-item :wrapper-col="{ offset: 4 }">
                <HiButton :controller="newUserButton" />
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
import { newUserForm, newUserButton } from './pageConfig.ts'
import { useRouter } from 'vue-router'

const router = useRouter()

newUserButton.onClick(async () => {
  const formData = await newUserForm.validate()
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
