<script setup>
defineProps(["name"]);
</script>

<template>
  <slot :name />
  <!-- works if :name="name" -->
</template>
