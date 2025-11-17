<template>
  <div>
    <input v-model="name" placeholder="Enter your name" />
    <h1>Hello, {{ name }}!</h1>
    <h1>Current Count: {{ count }}</h1>
    <h2>{{ countMessage }}</h2>
    <button @click="increment">Increment</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue';

export default defineComponent({
  name: 'Counter',
  setup() {
    const count = ref(0);
    const name = ref('');
    
    function increment() {
      count.value++;
    }
    
    function reset() {
      count.value = 0;
    }

    const countMessage = computed(() => {
      return count.value % 2 === 0 ? 'Even' : 'Odd';
    });

    watch(count, (newVal) => {
      if (newVal === 10) {
        console.log('Count has reached ten!');
      }
    });

    return {
      count,
      name,
      countMessage,
      increment,
      reset
    };
  }
});
</script>
