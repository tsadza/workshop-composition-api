<script setup>
import { ref, computed } from 'vue';

const text = ref('');

const editableText = computed({
  get: () => text.value,
  set: (newValue) => {
    text.value = newValue.toLowerCase();
  },
});
</script>

<template>
  <div class="example">
    <p>Spróbuj wpisać {{ text }} dużymi literami :</p>
    <input v-model="editableText" />
  </div>
</template>


