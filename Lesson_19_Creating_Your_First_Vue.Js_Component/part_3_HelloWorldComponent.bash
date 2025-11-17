npm run serve
<template>
  <div>
    <h1>{{ greeting }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    greeting: {
      type: String,
      default: 'Hello, Vue.js!'
    }
  });
});
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
<HelloWorld greeting="Hello, world from App.vue!" />
