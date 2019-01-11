import Vue from "vue";

class Repository {
  constructor() {
    Vue.util.defineReactive(this, "projects", []);
  }

  addProjects(projects) {
    this.projects = projects;
  }

  getProjects() {
    return this.projects;
  }
}

let store = new Repository();
export default store;
