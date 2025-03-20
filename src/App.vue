<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="bg-base-300 min-h-screen">
    <Navbar />
    <div class="py-24 px-8">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
