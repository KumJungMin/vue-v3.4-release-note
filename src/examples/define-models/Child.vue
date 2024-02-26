<script setup>
const count = defineModel("count", { type: Number, default: 0 });
</script>

<template>
  <button @click="count++">증가</button>
  {{ count }}
</template>
