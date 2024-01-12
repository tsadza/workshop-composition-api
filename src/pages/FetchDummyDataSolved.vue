<script setup>
import CafeMenu from '@/components/cafe-menu/CafeMenu.vue';
</script>

<template>
  <div>
    <h1>Dummy Data z Cafe Express</h1>
    <strong>30-40 min.</strong>
    <p>Zadanie polega na wykorzystaniu https://green.home2k.pl/api/menu aby jednorazowo pobrać i zapamiętywać pozyskane
      informacje. Zasoby stanowią ofertę kawiarni, z podziałem na kawy i ciastka.</p>
    <li>zbuduj Connector do pobrania danych</li>
    <li>zbuduj Adapter do transformacji pobranego menu na kawy i ciastka oddzielnie</li>
    <li>wykorzystaj Pinia Store do przechowania zasobów Menu</li>
    <li>zbuduj minimalnie lekki komponent wyświetlania Menu</li>
    <li>Menu ma zostać pobrane i wyświetlone automatycznie przy uruchomieniu komponentu</li>
    <cafe-menu />
  </div>
</template>

