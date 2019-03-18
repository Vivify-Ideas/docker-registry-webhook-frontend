<template>
  <v-flex xs12>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <project-card
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
          class="project-card"
        ></project-card>
      </v-layout>

      <v-btn
        absolute
        dark
        fab
        bottom
        right
        class="fab-btn"
        v-if="isAdmin"
        @click="addUser()">
        <v-icon>add</v-icon>
      </v-btn>
    </v-container>
  </v-flex>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import ProjectCardComponent from "./../../shared/components/project/project-card.component.vue";

@Component({
  name: "home",
  components: {
    "project-card": ProjectCardComponent
  }
})
export default class HomeComponent extends Vue {
  get projects() {
    return this.$store.getters.getProjects;
  }

  get isAdmin() {
    return this.$store.getters.isAdmin;
  }

  addUser() {
    this.$router.push('/create-user');
  }
}
</script>

<style lang="scss" scoped>
.project-card {
  margin-left: 1rem;
  margin-bottom: 1rem;
}

.fab-btn {
  background-color: rgb(249, 180, 22) !important;
  margin-bottom: 3rem;
}
</style>
