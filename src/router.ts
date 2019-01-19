import Vue from "vue";
import Router from "vue-router";
import HomeComponent from "./components/home/Home.component.vue";
import LogsComponent from "./components/logs/Logs.component.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeComponent
    },
    {
      path: "/logs/:projectName/:namespace",
      name: "logs",
      component: LogsComponent
    }
  ]
});
