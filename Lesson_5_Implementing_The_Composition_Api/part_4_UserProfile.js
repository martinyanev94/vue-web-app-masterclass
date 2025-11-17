<template>
  <div>
    <h1>{{ user.name }}</h1>
    <p>{{ user.email }}</p>
    <button @click="updateEmail">Update Email</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const user = ref({
      name: 'John Doe',
      email: 'john@example.com'
    });

    const updateEmail = () => {
      user.value.email = prompt('Enter new email:', user.value.email);
    };

    return { user, updateEmail };
  }
}
</script>
