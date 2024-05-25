<template>
  <HomeModule class="sell-well-products" title="畅销商品">
    <div class="list">
      <div class="item" v-for="item in products" :key="item.id">
        <a-avatar shape="square" :size="46" :src="item.poster" />
        <div class="info">
          <span class="name">{{ item.name }}</span>
          <p class="price">¥{{ item.price }}</p>
        </div>
        <span class="sell-count">{{ item.sellCount }}</span>
      </div>
    </div>
  </HomeModule>
</template>

<script setup lang="ts">
import HomeModule from '@/views/home/components/HomeModule.vue'
import { SellWellProducts } from '@/api/home'
import { onMounted, ref } from 'vue'
import type { ISellWellProduct } from '@/api/home'

const products = ref<Array<ISellWellProduct>>([])

onMounted(() => {
  getSellWellProducts()
})

const getSellWellProducts = async () => {
  const { data } = await SellWellProducts()
  products.value = data
}
</script>

<style scoped lang="less">
@import '../../../assets/css/common';

.sell-well-products {
  .list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .item {
      display: flex;
      align-items: center;
      .info {
        flex: 1;
        margin-left: 10px;
        padding-right: 10px;
        .name {
          .text-overflow();
          font-weight: 500;
        }
      }
      .sell-count {
        font-weight: bold;
        color: var(--color-content-text);
      }
    }
  }
}
</style>
