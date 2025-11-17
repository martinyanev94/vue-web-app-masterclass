<template>
  <div>
    <h1>{{ user.name }}</h1>
    <p>{{ user.email }}</p>
    <button @click="updateEmail">Update Email</button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const user = ref({ name: '', email: '' });

    const updateEmail = () => {
      user.value.email = prompt('Enter new email:', user.value.email);
    };

    onMounted(async () => {
      const response = await fetch('https://api.example.com/user');
      user.value = await response.json();
    });

    return { user, updateEmail };
  }
}
</script>
