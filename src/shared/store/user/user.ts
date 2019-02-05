import { MutationTree, ActionTree, GetterTree } from 'vuex';

import authService from './services/auth.service';
import { LOGIN_USER, AUTHORIZE_ME, CREATE_USER } from './action-types';

interface UserState {
  user: User | null;
}

const state: UserState = {
  user: null
};

const mutations: MutationTree<UserState> = {
  setUser(state: UserState, user: User) {
    state.user = user;
  }
};

const actions: ActionTree<UserState, UserState> = {
  [LOGIN_USER]({ commit }, { email, password }) {
    return authService.login(email, password).then((user) => {
      commit('setUser', user);
    });
  },
  [AUTHORIZE_ME]({ commit }) {
    return authService.authMe().then((user) => {
      commit('setUser', user);
    })
  },
  [CREATE_USER]({ commit }, paylod) {
    return authService.registerUser(paylod);
  }
};

const getters: GetterTree<UserState, UserState> = {
  isAdmin(state: UserState): boolean {
    return state.user ? state.user.is_admin : false;
  },

  getUserEmail(state: UserState): string {
    return state.user ? state.user.email : '';
  }
};

export const UserStore = {
  state,
  mutations,
  actions,
  getters
};
