import { ref } from 'vue';

export function useTodo() {
    const todos = ref<string[]>([]);

    const addTodo = (todo: string) => {
        todos.value.push(todo);
    };

    const removeTodo = (index: number) => {
        todos.value.splice(index, 1);
    };

    return { todos, addTodo, removeTodo };
}
