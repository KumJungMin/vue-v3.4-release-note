<script setup>
import { ref } from "vue";

import Child from "./Child.vue";
</script>

<template>
  <!-- allow -->
  <Child :max-range="10" :min-range="0" :value="0" />

  <!-- !! Invalid prop: custom validator check failed for prop "value" -->
  <Child :max-range="10" :min-range="0" :value="11" />
</template>
