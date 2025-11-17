const UserProfile = () => import('./views/UserProfile.vue');

const routes = [
  {
    path: '/user/:id',
    component: UserProfile,
  },
];
