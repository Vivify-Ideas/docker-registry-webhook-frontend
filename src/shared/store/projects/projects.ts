import { MutationTree, ActionTree, GetterTree } from 'vuex';
import { ADD_PROJECTS } from './action-types';

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
  [ADD_PROJECTS]({ commit }, projects: Project[]) {
    commit('add', projects);
  }
};

const getters: GetterTree<ProjectState, ProjectState> = {
  getProjects(state: ProjectState): Project[] {
    return state.projects;
  }
};

export const ProjectStore = {
  state,
  mutations,
  actions,
  getters
};
