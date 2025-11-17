const todosModule = {
    state: () => ({
        todos: [],
    }),
    mutations: {
        addTodo(state, todo) {
            state.todos.push(todo);
        },
    },
    actions: {
        addTodo({ commit }, todo) {
            commit('addTodo', todo);
        },
    },
    getters: {
        getTodos(state) {
            return state.todos;
        },
    },
};

export default todosModule;
import { createStore } from 'vuex';
import todosModule from './todos';

const store = createStore({
    modules: {
        todos: todosModule,
    },
});

export default store;
