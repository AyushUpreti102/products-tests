<template>
  <div class="product-card">
    <img :src="product.images[0]" alt="Product Image" />
    <h3>{{ product.title }}</h3>
    <p>${{ product.price }}</p>
    <base-button label="remove" variant="danger" @click="removeProduct" />
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types/types';
import BaseButton from './BaseButton.vue';
import { useProductStore } from '@/stores/product-store';

const props = defineProps<{
  product: Product
}>();

const productStore = useProductStore();

const removeProduct = () => {
  productStore.removeProduct(props.product.id);
}
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  background: white;
  transition: transform 0.2s ease-in-out;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 5px;
}

.product-card h3 {
  margin: 10px 0;
  font-size: 18px;
}

.product-card p {
  color: #555;
}

:deep(button) {
  margin-top: 10px;
}
</style>
