<template>
  <HiPage
    :table-controller="table"
    :top-button-controller="[add]"
    :search-form-controller="searchForm"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'cover'">
        <div class="cover">
          <img :src="getProductCover(record.cover)" alt="cover" />
        </div>
      </template>
    </template>
  </HiPage>
</template>

<script setup lang="ts">
import HiPage from '@/components/hiPage/HiPage.vue'
import { table, add, del, edit, searchForm } from './pageConfig'
import { useRouter } from 'vue-router'
import { ProductList, ProductDelete } from '@/api/product'

const router = useRouter()

table.setLoadData(ProductList)

add.onClick(() => {
  router.push({ name: 'productNew' })
})
edit.onClick((buttonController) => {
  const { record } = buttonController.clickParams
  router.push({ name: 'productEdit', params: { id: record.id } })
})
del.onConfirm(async (buttonController) => {
  const { record } = buttonController.clickParams
  await ProductDelete(record.id)
  table.reloadData()
})

const getProductCover = (cover: string) => {
  return cover.split(',')?.[0] || ''
}
</script>

<style scoped lang="less">
.cover {
  width: 80px;
  height: 80px;
  border-radius: 6px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
