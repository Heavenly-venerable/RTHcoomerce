<script setup lang="ts">
import { ref } from "vue";

const visible = ref(false);
const message = ref("");
const typeClass = ref("bg-primary text-primary-content"); // Warna default DaisyUI

const showToast = (msg: string, type: "primary" | "accent" | "base" = "primary", duration = 3000) => {
  message.value = msg;

  const colorClasses = {
    primary: "bg-primary text-primary-content",
    accent: "bg-accent text-accent-content",
    base: "bg-base-200 text-base-content",
  };

  typeClass.value = colorClasses[type] || "bg-primary text-primary-content";

  visible.value = true;
  setTimeout(() => {
    visible.value = false;
  }, duration);
};

defineExpose({ showToast });
</script>

<template>
  <div v-if="visible" class="toast toast-top toast-end z-50">
    <div :class="`p-3 rounded-lg shadow-md ${typeClass}`">
      <span>{{ message }}</span>
    </div>
  </div>
</template>
