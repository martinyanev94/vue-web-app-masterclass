/**
 * Increment action that increases the count asynchronously.
 * @returns {void}
 */
incrementAsync({ commit }) {
  setTimeout(() => {
    commit('increment');
  }, 1000);
}
