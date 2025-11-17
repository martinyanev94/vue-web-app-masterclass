// Lazy load the component
const AsyncComponent = () => import('./components/HeavyComponent.vue');

const routes = [
  {
    path: '/heavy',
    component: AsyncComponent,
  },
];
