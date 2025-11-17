const app = Vue.createApp({
    data() {
        return {
            userInput: ''
        };
    }
});
app.mount('#app');
<div id="app">
    <input v-model="userInput" placeholder="Type something"/>
    <p>You typed: {{ userInput }}</p>
</div>
