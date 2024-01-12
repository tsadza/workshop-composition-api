<script setup>
import { useTimer } from '@/composables/useTimer.js';
import { useTimeFormatter } from '@/composables/useTimeFormatter.js';

const { time, startTimer, stopTimer, isTimerRunning } = useTimer();
const { toggleFormat, formattedTime } = useTimeFormatter();
</script>

<template>
  <div class="example">
    <p>Upłynęło czasu: <strong>{{ formattedTime(time) }}</strong></p>
    <button @click="toggleFormat">Zmień Format</button>
    <button v-if="isTimerRunning" @click="stopTimer">Zatrzymaj Timer</button>
    <button v-else @click="startTimer">Startuj Timer</button>
  </div>
</template>
