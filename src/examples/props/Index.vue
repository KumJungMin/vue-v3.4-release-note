<script setup>
import Child from "./Child.vue";
import Docs from "./Docs.vue";
</script>

<template>
  <!-- allow -->
  <Child :max-range="10" :min-range="0" :value="0" />

  <!-- !! Invalid prop: custom validator check failed for prop "value" -->
  <Child :max-range="10" :min-range="0" :value="11" />

  <Docs />
</template>
