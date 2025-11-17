const app = Vue.createApp({
    data() {
        return {
            message: 'Hello, Vue.js!'
        }
    }
});
app.mount('#app');
<div id="app">
    <p>{{ message }}</p>
    <button @click="message = 'You clicked the button!'">Click Me!</button>
</div>
