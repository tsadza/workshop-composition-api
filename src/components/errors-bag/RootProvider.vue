<script setup>
import { provide } from 'vue'
import BranchElement from '@/components/errors-bag/BranchElement.vue'

// PoC of reactive track of errors in tree structure
const props = defineProps({
  errorsBag: {
    type: Array,
    required: false
  }
});
provide('errorsBag', props.errorsBag || [])
</script>

<template>
  <div class="example">
    Root
    <branch-element />
  </div>
</template>