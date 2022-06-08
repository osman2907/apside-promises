import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import App from './App.vue';
import store from './store';
import Loading from './components/Loading.vue';

Vue.config.productionTip = false;

Vue.component('ComponentLoading', Loading);

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
