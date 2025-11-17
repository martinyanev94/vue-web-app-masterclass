import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    items: [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
      { id: 3, name: 'Cherry' },
    ]
  },
  getters: {
    filteredItems: (state) => (query) => {
      return state.items.filter(item => item.name.includes(query));
    }
  }
});

// In your component
<template>
  <div>
    <input v-model="searchQuery" placeholder="Search...">
    <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  computed: {
    ...mapGetters(['filteredItems'])
  }
}
</script>
