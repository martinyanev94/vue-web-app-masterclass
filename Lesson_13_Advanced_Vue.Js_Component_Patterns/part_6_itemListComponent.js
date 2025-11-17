<template>
  <div>
    <h2>Item List</h2>
    <slot v-for="item in items" :item="item">
      {{ item.name }} - {{ item.value }}
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
};
</script>
<template>
  <item-list :items="items">
    <template v-slot="{ item }">
      <div>
        <strong>{{ item.name }}</strong>: {{ item.value }}
        <button @click="handleClick(item)">Action</button>
      </div>
    </template>
  </item-list>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: 'Apple', value: 50 },
        { name: 'Banana', value: 30 },
      ],
    };
  },
  methods: {
    handleClick(item) {
      console.log(`Clicked on ${item.name}`);
    },
  },
};
</script>
