<template>
  <button @click="emitGreeting">Greet Me</button>
</template>

<script>
import { defineComponent, emit } from 'vue';

export default defineComponent({
  methods: {
    emitGreeting() {
      this.$emit('greet', 'Hello from Vue.js!');
    }
  }
});
</script>
