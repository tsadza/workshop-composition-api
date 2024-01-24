<script setup>
import { useRouterStore } from '@/stores/useRouterStore';

const props = defineProps({
  componentsList: {
    type: Array,
    required: true
  }
});
const router = useRouterStore();
</script>

<template>
  <div class="example">
    <button v-for="(component, index) in componentsList" :key="index" @click="router.currentComponent = component">
      {{ component.__name }}
    </button>
    <component :is="router.currentComponent" />
  </div>
</template>
