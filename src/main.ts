import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuetify from 'vuetify';
import { connectToSockets, SocketsPlugin } from './shared/sockets';
import VueVirtualScroller from 'vue-virtual-scroller';
import { store } from './shared/store';

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(SocketsPlugin);
Vue.use(VueVirtualScroller);

connectToSockets();

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app');
