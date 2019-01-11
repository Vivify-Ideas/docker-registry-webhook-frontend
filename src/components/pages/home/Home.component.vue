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

<script>
import LayoutComponent from "./../../layout/layout.component";
import ProjectCardComponent from "./../../../shared/components/project/project-card.component.vue";
import store from "./../../../shared/store/Repository.js";

export default {
  name: "Home",
  components: {
    layout: LayoutComponent,
    "project-card": ProjectCardComponent
  },
  computed: {
    projects() {
      return store.getProjects();
    }
  }
};
</script>

<style lang="scss">
.project-card {
  margin-left: 1rem;
  margin-bottom: 1rem;
}
</style>
