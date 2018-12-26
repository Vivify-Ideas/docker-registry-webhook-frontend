import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import { connectToSockets, SocketsPlugin } from "./shared/sockets";

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(SocketsPlugin);

connectToSockets();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
