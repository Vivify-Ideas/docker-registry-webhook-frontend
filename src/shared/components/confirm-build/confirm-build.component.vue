<template>
  <v-dialog v-model="showDialog" width="500">
    <v-btn slot="activator" color="error"> Build </v-btn>

    <v-card>
      <v-card-title class="headline red lighten-2" primary-title>
        Start Build
      </v-card-title>

      <v-card-text>
        Are you sure that you want to start build for this
        <strong class="red">{{ project.projectName }}</strong
        >? Please choose the branch
        <v-radio-group v-model="branch">
          <v-radio
            v-for="(branchName, index) in branches"
            :key="index"
            :label="branchName"
            :value="branchName"
          ></v-radio>
        </v-radio-group>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn color="primary" flat @click="showDialog = false;"> Close </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="error" flat @click="startBuild"> Build </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "confirm-build",
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showDialog: false,
      branch: ""
    };
  },
  computed: {
    branches() {
      return Object.keys(this.project.branches);
    }
  },
  methods: {
    startBuild() {
      this.showDialog = false;
      this.$sendSocket("build", {
        project: this.project,
        branch: this.branch
      });
    }
  },
  mounted() {
    this.branch = this.branches[0];
  }
};
</script>
