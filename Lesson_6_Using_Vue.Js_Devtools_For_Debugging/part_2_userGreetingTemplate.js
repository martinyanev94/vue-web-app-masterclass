<template>
  <div>
    <input v-model="username" placeholder="Enter your name" />
    <p>Hello, {{ username }}!</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const username = ref('');
    return { username };
  }
}
</script>
