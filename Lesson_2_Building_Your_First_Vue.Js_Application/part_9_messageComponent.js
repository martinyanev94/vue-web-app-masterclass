import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index';

createApp(App)
  .use(store)
  .mount('#app');
import { mapState, mapMutations } from 'vuex';
<script>
export default {
  computed: {
    ...mapState(['message'])
  },
  methods: {
    ...mapMutations(['changeMessage'])
  }
}
</script>
<template>
  <div class="message-component">
    <h2>{{ message }}</h2>
    <button @click="changeMessage">Change Message</button>
  </div>
</template>
