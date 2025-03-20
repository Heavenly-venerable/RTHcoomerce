<script setup lang="ts">
import CartItem from "../components/CartItem.vue";

const items = [
  {
    id: 1,
    name: "Sepatu",
    price: 100000,
  },
  {
    id: 2,
    name: "Sepatu",
    price: 100000,
  },
  {
    id: 3,
    name: "Sepatu",
    price: 100000,
  },
  {
    id: 4,
    name: "Sepatu",
    price: 100000,
  },
];
</script>

<template>
  <div>
    <h3 class="text-xl font-bold mb-4">Products</h3>
    <div class="grid grid-cols-1 gap-4">
      <CartItem v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>
