npm install vue-router
import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';

Vue.use(Router);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

export default new Router({
  routes
});
import Vue from 'vue';
import App from './App.vue';
import router from './router';

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
