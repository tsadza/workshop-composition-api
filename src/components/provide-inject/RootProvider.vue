<script setup>
import { provide, ref } from 'vue'
import BranchElement from '@/components/provide-inject/BranchElement.vue'

const payload = ref('minerals')

provide('water', 'H2O')
provide('payload', payload)
</script>

<template>
  <div class="example">
    <input v-model="payload" />
    <p>Root provides: {{ payload }}</p>
    <branch-element />
  </div>
</template>