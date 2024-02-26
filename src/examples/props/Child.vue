<script setup>
const props = defineProps({
  maxRange: Number,
  minRange: Number,
  value: {
    type: Number,
    validator: (value, props) =>
      value >= props.minRange && value <= props.maxRange,
  },
});
</script>

<template>
  <div></div>
</template>
