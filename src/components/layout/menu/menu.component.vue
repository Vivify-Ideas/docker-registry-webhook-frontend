<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Docker Build Server</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  name: "menu",
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
};
</script>
