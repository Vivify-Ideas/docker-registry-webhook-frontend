<template>
  <div class="container">
    <h1>Log In</h1>
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

      <v-btn
        :disabled="!valid"
        color="info"
        class="login-btn"
        dark
        round
        @click="submit">
        Log In
      </v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import { LOGIN_USER } from "../../../shared/store";

@Component({
  name: 'login'
})
export default class LoginComponent extends Vue {
  valid = false;
  email = '';
  password = '';

  emailRules = [
    (v: any) => !!v || 'E-mail is required',
    (v: any) => /.+@.+/.test(v) || 'E-mail must be valid'
  ];

  submit() {
    this.$store.dispatch(LOGIN_USER, {
      email: this.email,
      password: this.password
    }).then(() => {
      this.$router.push('/');
    })
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
  width: 30%;

  h1 {
    width: 100%;
    background: rgb(249, 180, 22);
    color: white;
  }

  .form {
    border: 1px solid rgb(249, 180, 22);
    padding: 3rem;
    width: 100%;
  }

  .login-btn {
    width: 100%;
    margin: 0;
    padding: 0;
  }
}
</style>
