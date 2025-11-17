// store/index.ts
import { createStore } from 'vuex';
import user from './modules/user';

export default createStore({
  modules: {
    user
  }
});

// store/modules/user.ts
export default {
  state: {
    name: '',
    email: ''
  },
  mutations: {
    setUser(state, payload) {
      state.name = payload.name;
      state.email = payload.email;
    }
  },
  actions: {
    updateUser({ commit }, user) {
      commit('setUser', user);
    }
  },
  getters: {
    getUser(state) {
      return { name: state.name, email: state.email };
    }
  }
};
