<script setup>
import { ref } from 'vue';
import AboutApp from '@/components/layout/AboutApp.vue';
import FetchDummyData from '@/pages/FetchDummyData.vue';
import LifecycleHooks from '@/pages/LifecycleHooks.vue';
import ProvideInject from '@/pages/ProvideInject.vue';
import ReactiveProperties from '@/pages/ReactiveProperties.vue';
import StateManagement from '@/pages/StateManagement.vue';
import WatchForEffect from '@/pages/WatchForEffect.vue';
import WritableComputed from '@/pages/WritableComputed.vue';

const toggle = ref(false);
</script>

<template>
  <div id="app">
    <about-app></about-app>
    <button @click="toggle = !toggle">Toggle</button>
    <reactive-properties></reactive-properties>
    <writable-computed></writable-computed>
    <provide-inject></provide-inject>
    <lifecycle-hooks v-if="toggle"></lifecycle-hooks>
    <state-management></state-management>
    <watch-for-effect></watch-for-effect>
    <fetch-dummy-data></fetch-dummy-data>
  </div>
</template>

<style>
h1 {
  color: blue;
  font-size: 2em;
  line-height: 2em;
  margin-top: 50px;
  border-top: 5px dotted lightcoral;
  padding-top: 50px;
}

hr {
  margin-top: 20px;
}

strong {
  font-weight: bolder;
  color: red
}

.example {
  margin: 20px 0;
  padding: 20px;
  border: 1px dotted #777;
}
</style>
