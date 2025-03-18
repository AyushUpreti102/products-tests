<template>
  <div class="search-container">
    <input
      v-model="searchQuery"
      placeholder="Search for products..."
      class="search-bar"
      @input="debounceSearch"
    />
    <ul v-if="searchedProducts.length && searchQuery" class="search-dropdown">
      <li
        v-for="product in searchedProducts"
        :key="product.id"
      >
        <span>{{ product.title }}</span>
        <base-button label="+" @click="selectProduct(product)" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useDebounce } from '@/composables/useDebounce';
import BaseButton from './BaseButton.vue';
import { useProductStore } from '@/stores/product-store';
import type { Product } from '@/types/types';
import { storeToRefs } from 'pinia';

const productStore = useProductStore();
const { searchQuery, searchedProducts } = storeToRefs(productStore);

const debounceSearch = useDebounce(productStore.searchProducts, 1000)

const selectProduct = (product: Product) => {
  productStore.addProduct(product);
  searchQuery.value = "";
  searchedProducts.value = [];
}
</script>


<style scoped>
.search-container {
  position: relative;
  max-width: 700px;
  margin: 20px auto;
}

.search-bar {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.search-dropdown {
  position: absolute;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-top: none;
  max-height: 200px;
  overflow-y: auto;
  padding-inline-start: 0px;
  z-index: 100;
}

.search-dropdown li {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
  list-style: none;
}

.search-dropdown li:hover {
  background: #f1f1f1;
}
</style>
