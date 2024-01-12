<script setup>
import { ref } from 'vue'
import TimerComponent from '@/components/timer/TimerComponent.vue';

const toggle = ref(true);
</script>

<template>
  <div>
    <h1>Użycie lifecycle hooks</h1>
    <strong>30 min.</strong>
    <p>Utwórz licznik czasu spędzonego na stronie.</p>
    <li>Komponent licznika powinien wyświetlać liczbę sekund, które upłynęły od momentu zamontowania</li>
    <li>Pamiętaj o prawidłowym zarządzaniu zasobami i unikaniu wycieków pamięci poprzez czyszczenie timera (clearInterval)
    </li>
    <li>Dodaj możliwość pauzowania i wznawiania licznika</li>
    <li>Dodaj przełącznik wyświetlania między sekundami, a hh:mm:ss</li>
    <button @click="toggle = !toggle">Toggle</button>
    <timer-component v-if="toggle" />
  </div>
</template>
