<script setup>
import { inject, ref } from 'vue';

// PoC of reactive track of errors in tree structure
const errorsBag = inject('errorsBag', [])
const text = ref('')
const submit = () => {
  errorsBag.push(text.value)
  text.value = ''
}
</script>

<template>
  <div class="example">
    Leaf:
    <br />
    <input type="text" v-model="text" />
    <button @click="submit">Add error msg</button>
  </div>
</template>