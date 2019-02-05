import Vue from "vue";
import Router from "vue-router";
import HomeComponent from "./components/home/Home.component.vue";
import LogsComponent from "./components/logs/Logs.component.vue";
import LoginComponent from './components/auth/login/login.component.vue';
import CreateUserComponent from './components/auth/create-user/create-user.component.vue';
import { store } from "./shared/store";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeComponent,
      beforeEnter: (to, from, next) => {
        if (store.state.user) {
          return next();
        }
        return next('/login');
      }
    },
    {
      path: "/logs/:projectName/:namespace",
      name: "logs",
      component: LogsComponent
    },
    {
      path: "/login",
      name: "Login",
      component: LoginComponent
    },
    {
      path: "/create-user",
      name: "Create User",
      component: CreateUserComponent,
      beforeEnter: (to, from, next) => {
        if (store.getters.isAdmin) {
          return next();
        }
        return next('/');
      }
    }
  ]
});
