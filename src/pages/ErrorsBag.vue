<script setup>
import { ref } from 'vue'
import RootProvider from '@/components/errors-bag/RootProvider.vue'

const errorsBag = ref([])
</script>

<template>
  <div class="example">
    errors in the bag for tree structure :
    <li v-for="(error, index) in errorsBag" :key="'error' + index">
      {{ error }}
    </li>
    <RootProvider :errorsBag="errorsBag" />
    <p v-if="errorsBag.length">
      <small>
        The example describes how injected reactive errors table (errorsBag) can be used to keep track of errors in a
        hierarchical
        structure.
        Any errors that are added to the errorsBag array will be propagated to the root component,
        allowing for a tree-like structure to keep track of errors at the root level.
      </small>
    </p>
  </div>
</template>