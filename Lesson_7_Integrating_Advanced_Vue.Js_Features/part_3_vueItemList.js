const app = Vue.createApp({
    data() {
        return {
            items: ['Apple', 'Banana', 'Cherry']
        }
    }
});
app.mount('#app');
<div id="app">
    <ul>
        <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
    <button @click="items.push('Date')">Add Date</button>
</div>
