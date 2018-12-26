import store from "../store/Repository";

export const events = [
  {
    name: "projects",
    handler: function(data) {
      store.addProjects(data);
    }
  }
];
