<template>
  <div>
    <h1>{{ user.name }}</h1>
    <p>{{ user.email }}</p>
    <button @click="updateEmail">Update Email</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'John Doe',
        email: 'john@example.com'
      }
    };
  },
  methods: {
    updateEmail() {
      this.user.email = prompt('Enter new email:', this.user.email);
    }
  }
}
</script>
