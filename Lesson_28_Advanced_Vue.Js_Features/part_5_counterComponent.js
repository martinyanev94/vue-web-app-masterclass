// useCounter.js
import { ref } from 'vue';

export function useCounter() {
  const count = ref(0);

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  return {
    count,
    increment,
    decrement,
  };
}
<template>
  <div>
    <h1>Counter: {{ count }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { useCounter } from './useCounter';

export default {
  setup() {
    const { count, increment, decrement } = useCounter();

    return {
      count,
      increment,
      decrement,
    };
  },
};
</script>
