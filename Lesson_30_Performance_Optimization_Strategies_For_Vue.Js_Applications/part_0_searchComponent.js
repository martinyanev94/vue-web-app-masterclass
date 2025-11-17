<template>
  <div>
    <input v-model="searchQuery" placeholder="Search...">
    <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      items: [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Cherry' },
      ]
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => item.name.includes(this.searchQuery));
    }
  }
}
</script>
