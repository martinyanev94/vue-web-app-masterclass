const store = new Vuex.Store({
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
      return new Promise((resolve) => {
        setTimeout(() => {
          const todos = ['Task 1', 'Task 2', 'Task 3'];
          todos.forEach(todo => {
            commit('addTodo', todo);
          });
          resolve();
        }, 2000);
      });
    },
  },
});
<template>
  <div>
    <button @click="loadTodos">Load Todos</button>
    <ul>
      <li v-for="todo in todos" :key="todo">{{ todo }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['todos']),
  },
  methods: {
    loadTodos() {
      this.$store.dispatch('fetchTodos');
    },
  },
};
</script>
