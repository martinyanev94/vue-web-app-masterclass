import UserCard from './components/UserCard.vue';
export default {
  components: {
    UserCard
  },
  data() {
    return {
      users: [
        { name: 'John Doe', email: 'john@example.com', active: true },
        { name: 'Jane Smith', email: 'jane@example.com', active: false }
      ]
    }
  }
}
<template>
  <div id="app">
    <h1>User List</h1>
    <UserCard v-for="user in users" :key="user.email" :user="user" />
  </div>
</template>
