<script setup lang="ts">
import type { Product } from "../types/cart.ts";
import { useCartStore } from "../stores/cartStore.ts"

const props = defineProps<{ item: Product }>();
const cartStore = useCartStore()

const addItem = () => {
  cartStore.addToCart(props.item)
}
</script>

<template>
  <div>
    <div class="card card-compact bg-base-100 shadow-md">
      <figure>
        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ props.item.name }}</h2>
        <p>Rp {{ props.item.price }}</p>
        <div class="card-actions justify-end">
          <button @click="addItem" class="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
