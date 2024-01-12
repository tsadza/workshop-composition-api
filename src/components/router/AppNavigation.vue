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
    <button v-for="(item, index) in componentsList" :key="index" @click="router.setComponent(item)">
      {{ item.__name }}
    </button>
    <component :is="router.currentComponent" />
  </div>
</template>
