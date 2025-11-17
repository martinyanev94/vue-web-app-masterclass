npm install vuex@next
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      message: 'Hello from Vuex Store!'
    }
  },
  mutations: {
    changeMessage(state) {
      state.message = 'The message has been updated from Vuex!';
    }
  }
});

export default store;
