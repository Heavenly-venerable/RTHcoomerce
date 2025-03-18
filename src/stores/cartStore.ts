import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Product, CartItem } from "../types/cart";

export const useCartStore = defineStore("cart", () => {
  const cart = ref<CartItem[]>([]);

  const totalItems = computed(() => cart.value.reduce((sum, item) => sum + item.quantity, 0))
  const totalPrice = computed(() => cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0))

  const addToCart = (product: Product) => {
    const item = cart.value.find((p) => p.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
  };

  const removeFromCart = (productId: number) => {
    cart.value.filter((item) => item.id !== productId)
  }

  const updateQuantity = (productId: number, quantity: number) => {
    const item = cart.value.find((p) => p.id === productId);
    if (item && quantity > 0) {
      item.quantity = quantity
    } else {
      removeFromCart(productId)
    }
  }

  return { cart, totalItems, totalPrice, addToCart, removeFromCart, updateQuantity }
});
