// router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import UserProfile from '../views/UserProfile.vue';

const routes = [
  {
    path: '/user/:id',
    name: 'UserProfile',
    component: UserProfile
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
<template>
  <div>
    <h1>User Profile: {{ userId }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();
    const userId = route.params.id; // Accessing the dynamic segment

    return { userId };
  },
});
</script>
