<template>
  <v-card xs7>
    <v-card-title primary-title>
      <div>
        <h2 class="headline mb-0">{{ project.namespace }}</h2>
        <span>
          Project name: <strong>{{ project.projectName }}</strong>
        </span>
      </div>
    </v-card-title>

    <v-card-actions class="actions">
      <router-link
        tag="v-btn"
        :to="{
          name: 'logs',
          params: {
            projectName: project.projectName,
            namespace: project.namespace
          }
        }"
        class="primary"
        >Logs</router-link
      >
      <confirm-build :project="project"></confirm-build>
    </v-card-actions>
  </v-card>
</template>

<script>
import ConfirmBuildModalComponent from "../confirm-build/confirm-build.component.vue";

export default {
  name: "project-card",
  components: {
    "confirm-build": ConfirmBuildModalComponent
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    build() {}
  }
};
</script>

<style lang="scss">
.actions {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
