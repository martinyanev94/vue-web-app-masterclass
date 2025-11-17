import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: []
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    }
  },
  actions: {
    addProduct({ commit }, product) {
      commit('addToCart', product);
    }
  },
  getters: {
    cartItems: (state) => state.cart.length
  }
});
