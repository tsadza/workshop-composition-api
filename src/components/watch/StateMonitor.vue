
<script setup>
import { ref, watch, watchEffect } from 'vue';

const topic = ref('coffee');
const luckyNumber = ref(11);
const config = ref({ title: 'Base setup', isEnabled: false });
const lastChange = ref('');

watch(topic, (newValue, oldValue) => {
  console.log(`Tekst zmieniony z ${oldValue} na ${newValue}`);
  lastChange.value = 'Tekst';
});

watch(luckyNumber, (newValue, oldValue) => {
  console.log(`Liczba zmieniona z ${oldValue} na ${newValue}`);
  lastChange.value = 'Liczba';
});

watchEffect(() => {
  console.log(`Aktualny stan: ${topic.value}, ${luckyNumber.value}, ${JSON.stringify(config.value)}`);
});

watch(config, (newValue, oldValue) => {
  console.log(`Zmiana konfiguracji: ${JSON.stringify(oldValue)} na ${JSON.stringify(newValue)}`);
  lastChange.value = 'Config';
}, { deep: true });

</script>

<template>
  <div class="example">
    <div class="example">
      topic <input v-model="topic" />
      luckyNumber <input type="number" v-model.number="luckyNumber" />

      config title <input v-model="config.title" />
      & flag <input v-model="config.isEnabled" type="checkbox" /> on/off
    </div>

    <p>Ostatnia zmiana: {{ lastChange }}</p>
  </div>
</template>
