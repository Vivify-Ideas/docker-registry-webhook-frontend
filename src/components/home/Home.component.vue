<template>
  <layout>
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
      </v-container>
    </v-flex>
  </layout>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import ProjectCardComponent from "./../../shared/components/project/project-card.component.vue";
import LayoutComponent from "../layout/layout.component.vue";

@Component({
  name: "home",
  components: {
    layout: LayoutComponent,
    "project-card": ProjectCardComponent
  }
})
export default class HomeComponent extends Vue {
  get projects() {
    return this.$store.getters.getProjects;
  }
}
</script>

<style lang="scss">
.project-card {
  margin-left: 1rem;
  margin-bottom: 1rem;
}
</style>
