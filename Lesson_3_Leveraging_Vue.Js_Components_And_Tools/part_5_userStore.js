import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      users: [
        { name: 'John Doe', email: 'john@example.com', active: true },
        { name: 'Jane Smith', email: 'jane@example.com', active: false }
      ]
    }
  },
  mutations: {
    TOGGLE_USER_ACTIVE(state, email) {
      const user = state.users.find(user => user.email === email);
      if (user) {
        user.active = !user.active;
      }
    }
  }
});

export default store;
