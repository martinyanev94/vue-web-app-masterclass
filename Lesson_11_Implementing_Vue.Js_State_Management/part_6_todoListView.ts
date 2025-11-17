<template>
    <div>
        <h2>Todo List</h2>
        <input v-model="newTodo" placeholder="Add a todo" @keyup.enter="addTodo" />
        <ul>
            <li v-for="(todo, index) in getTodos" :key="index">{{ todo }}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    setup() {
        const store = useStore();
        const newTodo = ref('');

        const addTodo = () => {
            if (newTodo.value.trim()) {
                store.dispatch('addTodo', newTodo.value);
                newTodo.value = '';
            }
        };

        return {
            newTodo,
            addTodo,
            getTodos: () => store.getters.getTodos,
        };
    },
});
</script>
