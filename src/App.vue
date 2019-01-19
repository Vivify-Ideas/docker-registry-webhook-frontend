<template>
  <div id="app"><router-view /></div>
</template>

<script>
import Vue from "vue";

export default class App extends Vue {}
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
