<script setup lang="ts">
import { useCartStore } from "../stores/cartStore.ts";
import { computed } from "vue";

const cartStore = useCartStore();

const cartItems = computed(() => cartStore.cart);
const totalPrice = computed(() => cartStore.totalPrice);

const removeItem = (id: number) => {
  cartStore.removeFromCart(id);
};

const updateQuantity = (id: number, quantity: number) => {
  if (quantity > 0) {
    cartStore.updateQuantity(id, quantity);
  }
};
</script>

<template>
  <div class="max-w-lg mx-auto p-4 bg-base-200 rounded-lg shadow-md">
    <h2 class="text-xl font-semibold text-center mb-4">My Cart</h2>
    <div v-if="cartItems.length">
      <div class="overflow-x-auto">
        <div v-for="item in cartItems" :key="item.id"
          class="grid grid-cols-3 sm:flex sm:justify-between items-center border-b py-4 gap-2">
          <div class="col-span-2 flex items-center space-x-4">
            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" :alt="item.name"
              class="w-14 h-14 rounded-md object-cover" />
            <div>
              <h3 class="text-sm font-medium">{{ item.name }}</h3>
              <p class="text-xs text-gray-500">Rp {{ item.price }}</p>
            </div>
          </div>
          <div class="col-span-1 flex items-center justify-end space-x-2 sm:space-x-4">
            <button class="btn btn-sm btn-outline px-2 sm:px-3"
              @click="updateQuantity(item.id, item.quantity - 1)">-</button>
            <span class="w-6 text-center text-sm">{{ item.quantity }}</span>
            <button class="btn btn-sm btn-outline px-2 sm:px-3"
              @click="updateQuantity(item.id, item.quantity + 1)">+</button>
            <button class="btn btn-sm btn-error px-2 sm:px-3" @click="removeItem(item.id)">×</button>
          </div>
        </div>
      </div>
      <div class="mt-6">
        <div class="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span>Rp {{ totalPrice }}</span>
        </div>
        <button class="btn btn-primary w-full mt-4">Checkout</button>
      </div>
    </div>
    <p v-else class="text-center text-gray-500">Your cart is empty.</p>
  </div>
</template>
