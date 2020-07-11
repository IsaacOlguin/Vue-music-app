import Vue from 'vue'
import App from './App.vue'
import ChildComponent from './ChildComponent.vue';

//Vue.component('[nombreDelComponenteConElQueSeQuiereRegistrar]', [Componente])
Vue.component('childComp', ChildComponent)

new Vue({
  el: '#app',
  render: h => h(App)
})
