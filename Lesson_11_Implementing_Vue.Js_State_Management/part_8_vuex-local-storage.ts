const vuexLocalStorage = store => {
    store.subscribe((mutation, state) => {
        localStorage.setItem('store', JSON.stringify(state));
    });
};

const store = createStore({
    modules: {
        todos: todosModule,
    },
    plugins: [vuexLocalStorage],
});
