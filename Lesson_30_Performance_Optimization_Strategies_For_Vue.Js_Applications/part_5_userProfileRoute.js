const UserProfile = () => import('./components/UserProfile.vue');

const routes = [
  { path: '/user/:id', component: UserProfile }
];
