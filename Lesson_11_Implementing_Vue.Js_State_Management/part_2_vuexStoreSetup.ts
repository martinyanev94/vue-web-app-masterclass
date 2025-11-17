import { createStore } from 'vuex';

const store = createStore({
    state: {
        count: 0,
        todos: [],
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        addTodo(state, todo) {
            state.todos.push(todo);
        },
    },
    actions: {
        increment(context) {
            context.commit('increment');
        },
        addTodo(context, todo) {
            context.commit('addTodo', todo);
        },
    },
    getters: {
        getCount(state) {
            return state.count;
        },
        getTodos(state) {
            return state.todos;
        },
    },
});

export default store;
