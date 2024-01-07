import Vue from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia';
import store from './store';
import App from './App.vue';

import './assets/main.css';

Vue.use(PiniaVuePlugin);

new Vue({
  pinia: createPinia(),
  store,
  render: (h) => h(App),
}).$mount('#app');
