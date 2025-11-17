<template>
    <div>
        <h1>Count: {{ count }}</h1>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCounter } from './useCounter';

export default defineComponent({
    setup() {
        const { count, increment, decrement } = useCounter();

        return { count, increment, decrement };
    }
});
</script>
