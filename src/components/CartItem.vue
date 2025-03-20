<script setup lang="ts">
import { ref } from "vue"
import type { Product } from "../types/cart.ts";
import { useCartStore } from "../stores/cartStore.ts"
import Toast from "../components/Toast.vue"

const props = defineProps<{ item: Product }>();
const cartStore = useCartStore()
const toastRef = ref<InstanceType<typeof Toast> | null>(null);

const addItem = () => {
  cartStore.addToCart(props.item)
  toastRef.value?.showToast("Product berhasil ditambahkan", "primary", 3000);
}
</script>

<template>
  <Toast ref="toastRef" />
  <div>
    <div class="card card-compact bg-base-100 shadow-md">
      <figure>
        <img :src="props.item.image" :alt="props.item.name" loading="lazy" />
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
