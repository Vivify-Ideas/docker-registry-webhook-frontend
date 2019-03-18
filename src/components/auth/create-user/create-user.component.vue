<template>
  <div class="container">
    <h1>Create User</h1>
    <v-form 
      ref="form"
      class="form"
      v-model="valid">
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Type your e-mail"
        required>
      </v-text-field>

      <v-text-field
        v-model="password"
        label="Type your password"
        :type="'password'"
        required>
      </v-text-field>

      <v-select
        :items="projects"
        v-model="selectedProjects"
        multiple
        chips
        :item-text="formatProjectName"
        item-value="id"
        clearable
        required
        label="Select projects">
      </v-select>

      <v-btn
        :disabled="!valid"
        color="success"
        class="submit-btn"
        dark
        round
        @click="submit">
        Create User
      </v-btn>
    </v-form>
    <v-snackbar
      v-model="showMessage"
      top
      color="success"
      :timeout="2000"
    >
      {{ message }}
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { CREATE_USER } from "../../../shared/store";

@Component({
  name: 'create-user'
})
export default class CreateUserComponent extends Vue {
  valid = false;
  email = '';
  password = '';
  selectedProjects: string[] = [];
  showMessage: boolean = false;
  message: string = '';
  messageColor: string = 'success';

  emailRules = [
    (v: any) => !!v || 'E-mail is required',
    (v: any) => /.+@.+/.test(v) || 'E-mail must be valid'
  ];

  get projects() {
    return this.$store.getters.getProjects;
  }
  
  formatProjectName(project: Project) {
    return `${project.namespace} - ${project.projectName}`
  }

  resetForm() {
    this.email = '';
    this.password = '';
    this.selectedProjects = [];
  }

  showSnackBar(message: string, color: string = 'success') {
    this.showMessage = true;
    this.message = message;
    this.messageColor = color;
  }

  submit() {
    this.$store.dispatch(CREATE_USER, {
      email: this.email,
      password: this.password,
      projects: this.selectedProjects
    }).then(() => {
      this.showSnackBar('User has been created!');
      this.resetForm();
    });
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  
  h1 {
    color: white;
  }

  .form {
    max-width: 50%;
  }

  .submit-btn {
    width: 100%;
    margin: 0;
  }
}
</style>
