import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'

import routes from './routes';
import store from '@/store';

import AppEventBus from '@/plugins/AppEventBus';
import msToMm from '@/filters/ms-to-mm';
import blur from '@/directives/blur';

Vue.use(VueRouter);
Vue.use(AppEventBus);
Vue.use(msToMm);
Vue.use(blur);

const router = new VueRouter({ 
  routes: routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store: store
})
