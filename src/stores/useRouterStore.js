import { ref } from 'vue'
import { defineStore } from 'pinia';
import HomePage from '@/pages/HomePage.vue'

export const useRouterStore = defineStore('router', () => {

  const currentComponent = ref(HomePage);

  return { currentComponent };
});
