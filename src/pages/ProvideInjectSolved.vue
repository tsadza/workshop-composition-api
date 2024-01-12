<script setup>
import RootProvider from '@/components/provide-inject/RootProvider.vue';
</script>

<template>
  <div>
    <h1>Provide Inject, Solved</h1>
    <strong>20 min.</strong>
    <p>Wykorzystaj mechanizm provide/inject dla zademonstrowania skuteczności przekazywania reaktywnych informacji. </p>
    <ul>
      <li>od korzenia (RootProvider) </li>
      <li>do Liścia (LeafElement)</li>
    </ul>
    <RootProvider />
  </div>
</template>
