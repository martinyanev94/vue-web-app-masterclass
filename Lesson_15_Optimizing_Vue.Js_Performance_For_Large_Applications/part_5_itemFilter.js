<template>
  <div>
    <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [ /* a large array of objects */ ],
      searchQuery: '',
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => item.name.includes(this.searchQuery));
    },
  },
};
</script>
