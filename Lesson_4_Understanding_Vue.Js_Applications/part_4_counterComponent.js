<template>
  <div>
    <h1>Counter: {{ count }}</h1>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);
    
    const increment = () => {
      count.value++;
    };

    return { count, increment };
  }
}
</script>
