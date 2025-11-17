const items = ref([...Array(10000).keys()]); // A list of 10,000 items
const updateItems = () => {
  items.value.push(items.value.length); // Add a new item to the list
};
