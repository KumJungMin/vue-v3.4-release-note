<script setup>
import { ref, watch } from "vue";

const msg = ref("Hello World!");
const result1 = ref("");
const result2 = ref("");

const unwatcher = watch(msg, (v) => {
  result2.value = v;
  unwatcher();
});
</script>

<template>
  <h3>Once Watcher, unwatcher 방식</h3>
  msg: <input v-model="msg" />
  <div>입력값1: {{ result1 }}</div>
  <div>입력값2(once): {{ result2 }}</div>
</template>
