import { createRouter, createWebHistory } from 'vue-router';
import UserProfile from './UserProfile.vue';

const routes = [
  {
    path: '/user/:id',
    name: 'UserProfile',
    component: UserProfile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
