const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: 'Learn Vuex', completed: true },
      { id: 2, text: 'Build a todo app', completed: false },
    ],
  },
  getters: {
    completedTodos: (state) => {
      return state.todos.filter(todo => todo.completed);
    },
  },
});
<template>
  <div>
    <h2>Completed Todos</h2>
    <ul>
      <li v-for="todo in completedTodos" :key="todo.id">{{ todo.text }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['completedTodos']),
  },
};
</script>
