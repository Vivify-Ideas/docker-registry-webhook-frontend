import { MutationTree, ActionTree, GetterTree } from 'vuex';

interface ProjectState {
  projects: Project[];
}

const state: ProjectState = {
  projects: []
};

const mutations: MutationTree<ProjectState> = {
  add(state: ProjectState, payload: Project[]) {
    state.projects.push(...payload);
  }
};

const actions: ActionTree<ProjectState, ProjectState> = {
  addProjects({ commit }, projects: Project[]) {
    commit('add', projects);
  }
};

const getters: GetterTree<ProjectState, ProjectState> = {
  getProjects(state: ProjectState): Project[] {
    return state.projects;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
