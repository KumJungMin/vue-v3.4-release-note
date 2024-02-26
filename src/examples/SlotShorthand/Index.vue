<script setup>
import Child from "./Child.vue";
</script>

<template>
  <Child name="test">
    <template #test> Does not show </template>
  </Child>
</template>
