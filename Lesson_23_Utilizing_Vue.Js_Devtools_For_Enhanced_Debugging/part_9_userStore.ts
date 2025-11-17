import { createStore } from 'vuex';

export const store = createStore({
  state: {
    users: [] as Array<{ id: number; name: string; age: number }>,
  },
  mutations: {
    addUser(state, user) {
      state.users.push(user);
    },
  },
  actions: {
    fetchUsers({ commit }) {
      // Fetch users from API
      const users = [{ id: 1, name: 'Alice', age: 25 }];
      users.forEach(user => {
        commit('addUser', user);
      });
    },
  },
});
