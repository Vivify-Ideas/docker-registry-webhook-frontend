<template>
  <v-app dark>
    <menu-nav></menu-nav>
    <v-content>
      <v-container fluid> <slot></slot> </v-container>
    </v-content>
    <v-footer app> VivifyIdeas </v-footer>
  </v-app>
</template>

<script>
import MenuComponent from "./menu/menu.component.vue";

export default {
  name: "layout",
  components: {
    "menu-nav": MenuComponent
  },
  props: {
    msg: String
  }
};
</script>
