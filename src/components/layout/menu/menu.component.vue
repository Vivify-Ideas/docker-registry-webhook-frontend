<template>
  <v-toolbar>
    <v-toolbar-title>Docker Build Server</v-toolbar-title>
    <v-spacer></v-spacer>
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
}
</script>
