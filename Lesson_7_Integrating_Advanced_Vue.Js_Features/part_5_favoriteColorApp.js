const app = Vue.createApp({
    data() {
        return {
            favoriteColor: ''
        };
    },
    created() {
        const storedColor = localStorage.getItem('favoriteColor');
        if (storedColor) {
            this.favoriteColor = storedColor;
        }
    },
    methods: {
        setColor(color) {
            this.favoriteColor = color;
            localStorage.setItem('favoriteColor', color);
        }
    }
});
app.mount('#app');
<div id="app">
    <input v-model="favoriteColor" placeholder="Enter your favorite color"/>
    <button @click="setColor(favoriteColor)">Save</button>
    <p>Your favorite color is: {{ favoriteColor }}</p>
</div>
