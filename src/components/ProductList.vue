<template>
  <div class="list-container">
    <div class="product-list" v-if="addedProducts.length">
      <ProductCard
        v-for="product in addedProducts"
        :key="product.id"
        :product="product"
      />
    </div>
    <div class="empty-list" v-else>No saved products</div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/product-store';
import ProductCard from '@/components/ProductCard.vue';
import { storeToRefs } from 'pinia';

const productStore = useProductStore();
const { addedProducts } = storeToRefs(productStore);
</script>

<style scoped>
.list-container {
  height: calc(100% - 60px);
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.empty-list {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
