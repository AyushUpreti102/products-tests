<template>
  <button :class="['btn', variant]" :type="type">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "danger";
  }>(),
  {
    type: "button",
    variant: "primary",
  }
);
</script>

<style scoped>
.btn {
  display: inline-block;
  padding: 6px 16px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease-in-out;
}

.btn:hover {
  transform: scale(1.05);
}

.primary {
  background-color: #007bff;
  color: white;
}

.primary:hover {
  background-color: #0056b3;
}

.danger {
  background-color: #dc3545;
  color: white;
}

.danger:hover {
  background-color: #a71d2a;
}
</style>
