<script setup>
import { inject } from 'vue';

const water = inject('water')
const payload = inject('payload')
</script>

<template>
  <div class="example">
    Injected: {{ water }}, {{ payload }}
  </div>
</template>