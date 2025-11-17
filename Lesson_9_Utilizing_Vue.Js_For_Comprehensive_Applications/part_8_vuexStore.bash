npm install vuex
import { createStore } from 'vuex';

const store = createStore({
  state: {
    tasks: []
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    removeTask(state, index) {
      state.tasks.splice(index, 1);
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit('addTask', task);
    },
    removeTask({ commit }, index) {
      commit('removeTask', index);
    }
  }
});

export default store;
