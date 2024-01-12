<script setup>
import { useMenuStore } from '@/stores/useMenuStore';
import CafeMenuItem from './CafeMenuItem.vue';

const menu = useMenuStore();
</script>

<template>
  <div class="example">
    <p>
      Menu <button>{{ menu.coffeeMenu.length }} drinks</button> and <button>{{ menu.cakesMenu.length }} cakes</button>
    </p>
    <ul>
      <cafe-menu-item v-for="(item, index) in menu.coffeeMenu" :key="index" :item="item" />
    </ul>
  </div>
</template>