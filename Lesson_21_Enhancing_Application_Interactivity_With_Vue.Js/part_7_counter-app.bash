npm install vuex --save
// store.ts
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
    },
    reset(state) {
      state.count = 0;
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
    <input v-model="name" placeholder="Enter your name" />
    <h1>Hello, {{ name }}!</h1>
    <h1>Current Count: {{ count }}</h1>
    <h2>{{ countMessage }}</h2>
    <button @click="increment">Increment</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Counter',
  setup() {
    const store = useStore();
    const name = ref('');
    
    const count = computed(() => store.state.count);
    const countMessage = computed(() => count.value % 2 === 0 ? 'Even' : 'Odd');
    
    function increment() {
      store.commit('increment');
    }
    
    function reset() {
      store.commit('reset');
    }

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
