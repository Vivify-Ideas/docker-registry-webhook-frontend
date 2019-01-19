import Vue from 'vue';
import Vuex from 'vuex';
import { ProjectStore } from './projects/projects';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    projects: ProjectStore
  }
});

export * from './projects/action-types';