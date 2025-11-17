<template>
  <div>
    <h1>Current Count: {{ count }}</h1>
    <h2>{{ countMessage }}</h2>
    <button @click="increment">Increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'Counter',
  setup() {
    const count = ref(0);
    
    function increment() {
      count.value++;
    }

    const countMessage = computed(() => {
      return count.value % 2 === 0 ? 'Even' : 'Odd';
    });

    return {
      count,
      countMessage,
      increment
    };
  }
});
</script>
