import Vue from 'vue';
import Vuetify from 'vuetify';
import VueVirtualScroller from 'vue-virtual-scroller';

import App from './App.vue';
import router from './router';
import { connectToSockets, SocketsPlugin } from './shared/sockets';
import { store, AUTHORIZE_ME } from './shared/store';
import { configureHttp } from './shared/services';
import { USER_TOKEN_KEY, USER_KEY } from './constants';

Vue.config.productionTip = false;

configureHttp();

function setUser() {
  const user = localStorage.getItem(USER_KEY);
  if (user) {
    store.commit('setUser', JSON.parse(user));
  }
}

Vue.use(Vuetify);
Vue.use(SocketsPlugin);
Vue.use(VueVirtualScroller);

setUser();
connectToSockets();

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app');
