const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
});
<template>
  <div>
    <button @click="incrementCount">Increase Count</button>
    <p>Current Count: {{ count }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['count']),
  },
  methods: {
    incrementCount() {
      this.$store.commit('increment');
    },
  },
};
</script>
