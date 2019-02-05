<template>
  <layout>
    <div id="app"><router-view/></div>
  </layout>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

import LayoutComponent from "./components/layout/layout.component.vue";
import { USER_TOKEN_KEY, USER_KEY } from "./constants";
import { AUTHORIZE_ME } from "./shared/store";

@Component({
  components: {
    layout: LayoutComponent
  }
})
export default class App extends Vue {
  created() {
    const token = localStorage.getItem(USER_TOKEN_KEY);
    if (token) {
      this.$store.dispatch(AUTHORIZE_ME);
    }
  }
}
</script>

<style lang="scss">
@import "./../node_modules/vuetify/dist/vuetify.min.css";
@import "./../node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
