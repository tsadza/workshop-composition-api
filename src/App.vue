<script setup>
import AboutApp from '@/components/layout/AboutApp.vue';
import FetchDummyDataSolved from '@/pages/FetchDummyDataSolved.vue';
import LifecycleHooksSolved from '@/pages/LifecycleHooksSolved.vue';
import ProvideInjectSolved from '@/pages/ProvideInjectSolved.vue';
import ReactiveProperties from '@/pages/ReactiveProperties.vue';
import StateManagement from '@/pages/StateManagement.vue';
import WatchForEffectSolved from '@/pages/WatchForEffectSolved.vue';
import WritableComputedSolved from '@/pages/WritableComputedSolved.vue';
import AppNavigation from '@/components/router/AppNavigation.vue';
import ErrorsBag from './pages/ErrorsBag.vue';

const componentsList = [
  ErrorsBag,
  AboutApp,
  ReactiveProperties,
  WritableComputedSolved,
  ProvideInjectSolved,
  LifecycleHooksSolved,
  StateManagement,
  WatchForEffectSolved,
  FetchDummyDataSolved,
];
</script>

<template>
  <div id="app">
    <app-navigation :componentsList="componentsList"></app-navigation>
  </div>
</template>

<style>
h1 {
  color: blue;
  font-size: 2em;
  line-height: 0.9em;
  margin-top: 20px;
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

button {
  margin: 2px;
}
</style>
