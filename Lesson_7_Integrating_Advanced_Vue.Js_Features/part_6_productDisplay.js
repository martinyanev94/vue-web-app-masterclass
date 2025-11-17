const app = Vue.createApp({
    data() {
        return {
            product: {
                name: 'Gadget',
                price: 100,
                available: true
            }
        };
    }
});
app.mount('#app');
<div id="app">
    <h1>{{ product.name }}</h1>
    <p v-if="product.available">Price: ${{ product.price }}</p>
    <p v-else>Out of Stock</p>
</div>
