<script setup lang="ts">
import type { Product } from "../types/cart.ts";

const props = defineProps<{ item: Product }>();
</script>

<template>
  <div>
    <div class="card card-compact dark:bg-base-200 shadow-md">
      <figure>
        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ props.item.title }}</h2>
        <p>{{ props.item.description }}</p>
        <p>{{ props.item.price }}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
