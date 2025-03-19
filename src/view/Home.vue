<script setup lang="ts">
import CartItem from "../components/CartItem.vue";

const items = [
  {
    "title": "Sepatu",
    "description": "Sepatu ini adalah sepatu terbaru",
    "price": "Rp 100.000"
  },
  {
    "title": "Sepatu",
    "description": "Sepatu ini adalah sepatu terbaru",
    "price": "Rp 100.000"
  },
  {
    "title": "Sepatu",
    "description": "Sepatu ini adalah sepatu terbaru",
    "price": "Rp 100.000"
  },
  {
    "title": "Sepatu",
    "description": "Sepatu ini adalah sepatu terbaru",
    "price": "Rp 100.000"
  },
]
</script>

<template>
  <div>
    <div class="grid grid-cols-1 gap-4">
      <CartItem v-for="item in items" :key="item.title" :item="item" />
    </div>
  </div>
</template>
