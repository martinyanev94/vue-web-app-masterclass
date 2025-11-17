function increment() {
  store.commit('increment');
  console.log(`Current Count: ${store.state.count}`);
}
