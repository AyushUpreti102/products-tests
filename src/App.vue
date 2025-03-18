<template>
  <div class="container">
    <search-bar @on-change="debounceSearch" />
    <product-list />
  </div>
</template>

<script setup lang="ts">
import SearchBar from './components/SearchBar.vue';
import ProductList from './components/ProductList.vue';
import { useProductStore } from './stores/product-store';
import { useDebounce } from './composables/useDebounce';

const productStore = useProductStore();

const debounceSearch = useDebounce(productStore.searchProducts, 1000)
</script>

<style>
.container {
  width: 90%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
