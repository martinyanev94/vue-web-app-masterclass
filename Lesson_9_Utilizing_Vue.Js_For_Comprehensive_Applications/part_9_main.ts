import { createApp } from 'vue';
import App from './App.vue';
import { createStore } from './store';
import { createRouter } from 'vue-router';

const app = createApp(App);
const store = createStore();

app.use(store);
app.use(router);
app.mount('#app');
