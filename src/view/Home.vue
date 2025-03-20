<script setup lang="ts">
import CartItem from "../components/CartItem.vue";

const items = [
  {
    id: 1,
    name: "Sneaker",
    image:
      "https://images.unsplash.com/photo-1603787081207-362bcef7c144?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
    price: 100000,
  },
  {
    id: 2,
    name: "Crew Neck T-Shirt",
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dCUyMHNoaXJ0fGVufDB8fDB8fHww",
    price: 100000,
  },
  {
    id: 3,
    name: "Rolex",
    image:
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdhdGNofGVufDB8fDB8fHww",
    price: 100000,
  },
  {
    id: 4,
    name: "Bag",
    image:
      "https://images.unsplash.com/photo-1528384483229-b4a97480dbea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbiUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
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
