<script setup>
import { ref } from "vue";
import Child from "./Child.vue";

const count = ref(0);
</script>

<template>
  <Child :count />
</template>
