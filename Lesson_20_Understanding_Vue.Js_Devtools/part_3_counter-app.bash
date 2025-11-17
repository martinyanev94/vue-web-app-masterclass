npm install vuex --save
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 0
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});

export default store;
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

createApp(App).use(store).mount('#app');
<template>
  <div>
    <h1>Counter Example</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Counter',
  setup() {
    const store = useStore();
    
    function increment() {
      store.commit('increment');
    }

    return {
      count: store.state.count,
      increment
    };
  }
});
</script>
