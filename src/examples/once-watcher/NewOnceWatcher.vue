<script setup>
import { ref, watch } from "vue";

const msg = ref("Hello World!");
const result1 = ref("");
const result2 = ref("");

watch(msg, (v) => {
  result1.value = v;
});

watch(
  msg,
  (v) => {
    result2.value = v;
  },
  {
    once: true,
  }
);
</script>

<template>
  <input v-model="msg" />
  <div>입력값: {{ result1 }}</div>
  <div>입력값: {{ result2 }}</div>
</template>
