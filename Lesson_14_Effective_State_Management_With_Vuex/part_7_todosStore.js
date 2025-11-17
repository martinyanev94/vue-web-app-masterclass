const todosModule = {
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
  },
  actions: {
    fetchTodos({ commit }) {
      // Simulated fetching logic...
    },
  },
  getters: {
    completedTodos: (state) => {
      return state.todos.filter(todo => todo.completed);
    },
  },
};

const store = new Vuex.Store({
  modules: {
    todos: todosModule,
  },
});
this.$store.commit('todos/addTodo', newTodo);
const completed = this.$store.getters['todos/completedTodos'];
