<script setup>
import { ref, computed } from "vue";

const firstName = ref("John");
const lastName = ref("Doe");

const fullName = computed({
  // getter
  get(oldValue) {
    if (!oldValue) return firstName.value;
    else return firstName.value + " " + oldValue;
  },
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split(" ");
  },
});
</script>

<template>
  <h1>{{ fullName }}</h1>
  <input v-model="firstName" />
</template>
