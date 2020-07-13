import Vue from 'vue'
import App from './App.vue'

import AppEventBus from '@/plugins/AppEventBus';

Vue.use(AppEventBus);

new Vue({
  el: '#app',
  render: h => h(App)
})
