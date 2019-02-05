import Vue from 'vue';
import Vuex, { ModuleTree } from 'vuex';
import { ProjectStore } from './projects/projects';
import { UserStore } from './user/user';

Vue.use(Vuex);

interface RootState {
  projects: Project[],
  user: User
};

export const store = new Vuex.Store<RootState>({
  modules: {
    projects: ProjectStore,
    user: UserStore
  }
});

export * from './projects/action-types';
export * from './user/action-types';