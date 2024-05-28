<template>
  <div class="module-container">
    <HiForm :controller="newFormController">
      <template #auth="{ formData, config }">
        <a-tree
          v-if="routerList.length"
          v-model:checkedKeys="formData[config.model]"
          :tree-data="routerList"
          show-icon
          checkable
          defaultExpandAll
          :field-names="{ title: 'pageTitle', key: 'id' }"
          :selectable="false"
          :checkStrictly="true"
        >
          <template #title="{ pageTitle, routeName }">
            <a-tag v-if="routeName !== 'button'" color="success" :bordered="false">页面</a-tag>
            <a-tag v-else color="orange" :bordered="false">按钮</a-tag>
            <span>{{ pageTitle }}</span>
          </template>
        </a-tree>
      </template>
    </HiForm>
  </div>
</template>

<script setup lang="ts">
import HiForm from '@/components/hiForm/HiForm.vue'
import { newFormController } from './pageConfig'
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { RoleManageDetail, RoleManageAdd, RoleManageUpdate } from '@/api/role'
import { type IRouter, RouterList } from '@/api/router'
import { getParamsId } from '@/utils'

const route = useRoute()
const router = useRouter()
const routerList = ref<IRouter[]>([])

onMounted(() => {
  getRouterList()
  if (isEdit.value) {
    getDetail()
  }
})

const isEdit = computed(() => route.name === 'roleManageEdit')

const getDetail = async () => {
  const { data } = await RoleManageDetail(getParamsId(route))
  newFormController.setFormData(data)
}

const getRouterList = async () => {
  const { data } = await RouterList()
  const traversal = (list: IRouter[]) => {
    for (const item of list) {
      const { children, buttons } = item
      if (buttons?.length) {
        const list: IRouter[] = buttons.map<IRouter>(({ key, name }) => ({
          id: key,
          routeName: 'button',
          routePath: key,
          componentName: 'RouterView',
          pageTitle: name
        }))
        item.children = [...list, ...(children || [])]
      }
      if (children?.length) {
        traversal(children)
      }
    }
  }
  traversal(data.list)
  routerList.value = data.list
}

newFormController.onDefaultConfirm(async (controller) => {
  const formData = await newFormController.validate()
  formData.auth = Array.isArray(formData.auth) ? formData.auth : formData?.auth?.checked || []
  controller.showLoading()
  try {
    if (isEdit.value) {
      await RoleManageUpdate(getParamsId(route), formData)
    } else {
      await RoleManageAdd(formData)
    }
    router.push({ name: 'roleManage' })
  } finally {
    controller.hideLoading()
  }
})
newFormController.onDefaultCancel(() => {
  router.replace({ name: 'roleManage' })
})
</script>

<style scoped lang="less">
.module-container {
  :deep(.ant-tree) {
    .ant-tree-icon__customize {
      width: auto;
    }
  }
}
</style>
