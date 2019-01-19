import Vue from 'vue';
import Vuex from 'vuex';
import ProjectStore from './projects';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    projects: ProjectStore
  }
});
