<template>
  <div id="app">
    <my-list :items="items" :showDetails="showDetails"></my-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['Apple', 'Banana', 'Cherry'],
      showDetails: true,
    };
  },
};

const MyList = {
  props: {
    items: Array,
    showDetails: Boolean
  },
  render(createElement) {
    return createElement('ul', this.items.map(item => {
      const details = this.showDetails ? createElement('span', ` (${item} details)`) : null;
      return createElement('li', [
        item,
        details
      ]);
    }));
  }
};
</script>
