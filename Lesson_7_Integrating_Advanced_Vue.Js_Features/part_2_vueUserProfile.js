const app = Vue.createApp({
    data() {
        return {
            user: {
                name: 'John Doe',
                age: 30
            }
        }
    }
});
app.mount('#app');
<div id="app">
    <p>Name: {{ user.name }}</p>
    <p>Age: {{ user.age }}</p>
    <button @click="user.age++">Increase Age</button>
</div>
