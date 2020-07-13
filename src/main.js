import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'

import routes from './routes';

import AppEventBus from '@/plugins/AppEventBus';
import msToMm from '@/filters/ms-to-mm';

Vue.use(VueRouter);
Vue.use(AppEventBus);
Vue.use(msToMm);

const router = new VueRouter({ 
  routes: routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
