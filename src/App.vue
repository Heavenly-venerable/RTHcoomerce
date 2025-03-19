<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <div class="py-24 px-8">
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
