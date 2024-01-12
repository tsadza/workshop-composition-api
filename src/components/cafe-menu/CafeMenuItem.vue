<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <li>
    {{ item.price.toFixed(2) }} = {{ item.name }}</li>
</template>