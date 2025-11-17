<template>
  <div>
    <h1>Current Count: {{ count }}</h1>
    <button @click="increment">Increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Counter',
  setup() {
    const count = ref(0);
    
    function increment() {
      count.value++;
    }

    return {
      count,
      increment
    };
  }
});
</script>
