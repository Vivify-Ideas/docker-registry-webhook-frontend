<template>
  <v-toolbar>
    <v-toolbar-title>Docker Build Server</v-toolbar-title>
    <v-spacer></v-spacer>
    <span v-if="userEmail">{{ userEmail }}</span>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "menu"
})
export default class MenuComponent extends Vue {
  data() {
    return {
      items: [
        {
          title: "Logs",
          icon: "cast"
        }
      ]
    };
  }

  get userEmail(): string {
    return this.$store.getters.getUserEmail;
  }
}
</script>
