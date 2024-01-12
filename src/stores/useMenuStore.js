import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia';
import { fetchMenu } from '@/connectors/MenuConnector';
import { filterCoffee, filterCakes } from './MenuAdapter';

export const useMenuStore = defineStore('menu', () => {

  const items = ref([])
  const coffeeMenu = computed(() => filterCoffee(items))
  const cakesMenu = computed(() => filterCakes(items))

  onMounted(async () => {
    items.value = await fetchMenu();
  })

  return { coffeeMenu, cakesMenu };
});
