<template>
  <div class="container">
    <search-bar />
    <product-list />
  </div>
</template>

<script setup lang="ts">
import SearchBar from './components/SearchBar.vue';
import ProductList from './components/ProductList.vue';
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
