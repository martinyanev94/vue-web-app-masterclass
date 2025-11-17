<template>
    <div>
        <h2>My Todos</h2>
        <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo"/>
        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                {{ todo }} <button @click="removeTodo(index)">Remove</button>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTodo } from './useTodo';

export default defineComponent({
    setup() {
        const { todos, addTodo, removeTodo } = useTodo();
        const newTodo = ref('');

        const addNewTodo = () => {
            if (newTodo.value.trim()) {
                addTodo(newTodo.value);
                newTodo.value = '';
            }
        };

        return { todos, addNewTodo, removeTodo, newTodo };
    }
});
</script>
