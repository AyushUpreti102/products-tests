import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useAxios } from '@/composables/useAxios';
import type { Product, SearchResult } from '@/types/types';

export const useProductStore = defineStore('product-store', () => {
  const searchQuery = ref('');
  const searchedProducts = ref<Product[]>([])
  const addedProducts = ref<Product[]>([]);

  const searchProducts = async () => {
    const { data } = await useAxios<SearchResult>({
      url: '/products/search',
      method: 'GET',
      params: {
        q: searchQuery.value,
      }
    })

    searchedProducts.value = data.products;
  }

  const addProduct = (product: Product) => {
    addedProducts.value.push(product);
  }

  const removeProduct = (productId: number) => {
    addedProducts.value = addedProducts.value.filter(product => product.id !== productId)
  }

  return {
    searchedProducts,
    addedProducts,
    searchQuery,
    searchProducts,
    addProduct,
    removeProduct,
  }
})
