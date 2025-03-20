<script setup lang="ts">
import { useRoute } from "vue-router"
import { useCartStore } from "../stores/cartStore.ts"

const cartStore = useCartStore()

const route = useRoute()
</script>

<template>
  <div>
    <div class="navbar bg-base-100 shadow-md">
      <div class="navbar-start">
        <div class="dropdown dropdown-start">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <router-link :class="{ 'text-primary font-bold': route.path === '/' }"
                class="hover:text-primary transition" to="/">Home</router-link>
            </li>
            <li>
              <router-link :class="{ 'text-primary font-bold': route.path === '/cart' }"
                class="hover:text-primary transition" to="/cart">
                Cart
                <div class="badge badge-accent">
                  {{ cartStore.totalItems }}
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <span class="text-xl font-bold">
          <router-view to="/">RTHCoomerce</router-view>
        </span>
      </div>
      <div class="navbar-end">
        <div class="dropdown dropdown-end mr-2">
          <div tabindex="0" role="button" class="btn btn-ghost px-2">
            Theme
            <svg width="12px" height="12px" class="inline-block h-2 w-2 fill-current opacity-60"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <ul tabindex="0" class="dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow-2xl mt-3">
            <li v-for="theme in ['default', 'light', 'dark', 'coffee', 'valentine', 'cupcake']" :key="theme">
              <input type="radio" name="theme-dropdown"
                class="theme-controller btn btn-sm btn-block btn-ghost justify-start" :aria-label="theme"
                :value="theme" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
