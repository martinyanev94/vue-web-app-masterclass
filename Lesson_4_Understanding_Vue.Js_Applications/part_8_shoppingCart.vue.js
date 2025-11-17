<template>
  <div>
    <h1>Shopping Cart Items: {{ cartCount }}</h1>
    <button @click="addProduct(product)">Add Product</button>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const cartCount = computed(() => store.getters.cartItems);

    const addProduct = (product) => {
      store.dispatch('addProduct', product);
    };

    return { cartCount, addProduct, product: { id: 1, name: 'Sample Product' } };
  }
}
</script>
