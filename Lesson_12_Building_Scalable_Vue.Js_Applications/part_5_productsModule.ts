// store/modules/products.ts
const productsModule = {
    state: () => ({
        products: [] as Array<Product>,
    }),
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
    },
    actions: {
        fetchProducts({ commit }) {
            // Simulate an API call
            const fetchedProducts = [
                { id: 1, name: 'Product 1' },
                { id: 2, name: 'Product 2' }
            ];
            commit('setProducts', fetchedProducts);
        },
    },
    getters: {
        getProducts(state) {
            return state.products;
        },
    },
};

export default productsModule;
